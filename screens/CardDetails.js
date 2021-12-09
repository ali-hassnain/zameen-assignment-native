import React, { useState } from "react";
import { Button } from "galio-framework";
import HomeScreen from "./HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  Platform,
  Linking,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function CardDetails({ route, navigation: { goBack } }) {
  const navigation = useNavigation();
  const shareImage = async () => {
    const shareOptions = await Share.share({
      message: `Hey, check out this amazing book shared by ${first_name}
      ${image_url}.`,
    });
  };
  const { first_name, last_name, img, id, image_url } = route.params;
  return (
    <>
      <View style={styles.cardDetailsBox}>
        {/* <Text style={styles.tileNumber}>Tile: {id}</Text> */}

        <TouchableOpacity onPress={() => navigation.navigate("Modal", { img })}>
          <Image source={{ uri: img }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.name}>
          {first_name} {last_name}
        </Text>
        <TouchableOpacity onPress={() => shareImage()}>
          <Ionicons
            name="share"
            color="#2186df"
            size={30}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => {
          goBack();
        }}
        style={styles.backButton}
        color={"black"}
      >
        Back
      </Button>
    </>
  );
}

export default CardDetails;
const styles = StyleSheet.create({
  cardDetailsBox: {
    marginTop: 80,
    backgroundColor: "#E6ECF6",
    marginHorizontal: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 40,
    paddingTop: 20,
  },

  image: { height: 300, width: "100%", borderRadius: 5 },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    paddingVertical: 20,
    textAlign: "center",
  },
  shareIcon: {
    alignSelf: "center",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#2186df",
    borderRadius: 15,
    paddingLeft: 7,
  },
  backButton: { alignSelf: "center" },
});
