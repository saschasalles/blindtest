import firebase from "firebase/app";

const uploadImageAsync = async (uri) => {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
   };
   xhr.onerror = function() {
     reject(new TypeError('Network request failed')); // error occurred, rejecting
   };
   xhr.responseType = 'blob'; // use BlobModule's UriHandler
   xhr.open('GET', uri, true); // fetch the blob from uri in async mode
   xhr.send(null); // no initial data
 });

  const ref = firebase
    .storage()
    .ref()
    .child(`avatars/${firebase.auth().currentUser.uid}`);
  const snapshot = await ref.put(blob);


  return await snapshot.ref.getDownloadURL();
};

export const openAvatarDialog = async (url, success, error) => {
  console.log("Let's upload this", url);
  const avatarUrl = await uploadImageAsync(url);
  console.log("Avatar successfully uploaded", avatarUrl);
  success(avatarUrl);
  return avatarUrl
};
