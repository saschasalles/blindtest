import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePlayerAvatar } from "../data/playerEffects";
import { signOutFromAuth } from "../firebase/firebase";
import {
    Image,
    Header,
    Button
  } from "semantic-ui-react";

const Profile = () => {
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const uploadSuccess = (avatarUrl) => dispatch(updatePlayerAvatar(avatarUrl));
  const uploadError = (msg) => alert(msg);

  return (
    <div>
        <Image
            source={{
                uri:
                player.avatar ||
                "https://static.thenounproject.com/png/363640-200.png",
            }}
            />

        <Header>
            Hello {player.name}!
        </Header>

        <Button onClick={() => signOutFromAuth(dispatch)} >
            Sign Out
        </Button>
    </div>
  );
};

export default Profile;