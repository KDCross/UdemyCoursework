import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ProfileCamera, NoPermission } from "../components/settings.styles";

export const CameraScreen = () => {
  const [type] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading
    return <GetPermission />;
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
      console.log(photo);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture", source);
      }
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
