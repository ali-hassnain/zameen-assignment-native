import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

const { width } = Dimensions.get("window");

function ModalScreen({ route, navigation: { goBack } }) {
  const { img } = route.params;

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity style={styles.backIcon}>
        <Ionicons
          name="chevron-back-sharp"
          color="#fff"
          size={25}
          onPress={() => {
            goBack();
          }}
        />
      </TouchableOpacity>

      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
        bindToBorders={true}
        captureEvent={true}
      >
        <Image
          source={{ uri: img }}
          style={{
            width: width,
            height: "60%",
          }}
        ></Image>
      </ReactNativeZoomableView>
    </View>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  backIcon: { position: "relative", top: 60, zIndex: 1, right: 150 },
});
