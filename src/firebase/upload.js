import * as firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import api from "./api";

const uploadImageAsync = async (uri) => {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(`avatars/${firebase.auth().currentUser.uid}`);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
};

export const openAvatarDialog = async (success, error) => {
  const {
    status,
  } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== "granted") {
    error(
      "To change your avatar, you need to give the app the permission to access to the camera and the media library!"
    );
    return;
  }
  // Permissions are OK
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    console.log("Let's upload this", result.uri);

    const avatarUrl = await uploadImageAsync(result.uri);

    console.log("Avatar successfully uploaded", avatarUrl);

    success(avatarUrl);
  }
};
