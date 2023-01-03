import React, { useContext, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { ProfileCamera, GetPermission } from "../components/settings.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({navigation}) => {
  const [type] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraReady,setIsCameraReady] = useState(false);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  if (!permission) {
    // Camera permissions are still loading
    return (
      <SafeArea>
        <GetPermission />
      </SafeArea>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <GetPermission>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </GetPermission>
    );
  }

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(cam) => (cameraRef.current = cam)}
        type={type}
        onCameraReady={onCameraReady}
      />
    </TouchableOpacity>
  );
};
