import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={props.id}
      onPress={
        // () => console.log("hello")
        () =>
          navigation.navigate("CardDetails", {
            id: props.id,
            first_name: props.first_name,
            last_name: props.last_name,
            img: props.img,
            image_url: props.image_url,
          })
      }
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.img }} />
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.cardDetailsTile}>
            {props.first_name} {props.last_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F0F2",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardDetails: {
    justifyContent: "center",
  },
  cardDetailsTile: {
    fontSize: 18,
    // fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
});
