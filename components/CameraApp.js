import React, {useState, useEffect} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

const CameraApp = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }, [])

  setSnap = async () => {
    if (hasPermission === true) {
      const photo = await this.camera.takePictureAsync()
      await MediaLibrary.saveToLibraryAsync(photo.uri)
    }
  }
  
  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>No Access to Camera</Text>
  }


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Camera
      type={type}
      style={{width: 200, height: 150}}
      ref={(ref) => {
        this.camera = ref
      }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              )
            }}
          >
            <Text>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSnap()
            }}
          >
            <Text>Snap</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {

//   },
//   button: {

//   },
//   text: {

//   }
// })

export default CameraApp