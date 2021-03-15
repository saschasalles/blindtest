import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePlayerAvatar } from "../data/playerEffects";
import { signOutFromAuth } from "../firebase/firebase";
import {
    Image,
    Header,
    Button,
    Segment, 
    Form,
  } from "semantic-ui-react";
import { openAvatarDialog } from "../firebase/upload";
import ImageLoader from 'react-image-file';

const Profile = () => {
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const uploadSuccess = (avatarUrl) => dispatch(updatePlayerAvatar(avatarUrl));
  const uploadError = (msg) => alert(msg);

  const handleImageChange = (evt) => {
    if (evt.currentTarget.files[0]) {
      const img = evt.currentTarget.files[0];
      setImage(img);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    openAvatarDialog(image, uploadSuccess, uploadError)
    console.log(player.avatar)
  }

  return (
    <div>
      <Segment padded>
        <Header as="h2">Profile</Header>
        <Image src={`${player.avatar}` || "https://static.thenounproject.com/png/363640-200.png"} style={{"height": "100px", "width": "100px"}} />
        <ImageLoader file={player.avatar} alt='image uri de mrd'/>
        <Header>
            Hello {player.name}!
        </Header>

        <Segment basic>
          <Form onSubmit={handleSubmit} >
            <Form.Input
                size="small"
                type="file"
                label="Changer la photo"
                accept="image/png, image/jpeg"
                onChange={handleImageChange} 
            />
            <Button type="submit">Modifier</Button>
          </Form>
          <Button color="red" onClick={() => signOutFromAuth(dispatch)} >
              Sign Out
          </Button>
        </Segment>
      </Segment>
    </div>
  );
};

export default Profile;