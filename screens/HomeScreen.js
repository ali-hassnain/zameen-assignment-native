import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Data from "../data/Data";
import Card from "../components/Card";

// import axios from "axios";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    // await AsyncStorage.setItem("imageData", data.download_url);

    setPage((prev) => prev + 1);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      const data = await response.json();

      // console.log("data1:", data);
      console.log("page:", page);
      if (page > 1) {
        setData((prevData) => [...prevData, ...data]);

        // console.log("data:", data);
      } else {
        setData(data);
        // const imageUrl = data.map((img) => img.download_url);
        // console.log("imageUrl:", imageUrl);
        // AsyncStorage.setItem("image", imageUrl);
      }

      // console.log("data2", data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // storeData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zameen.com Interview Project</Text>
      <FlatList
        data={data}
        // initialNumToRender={30}
        onEndReachedThreshold={5}
        onEndReached={fetchData}
        renderItem={({ item }) => (
          <Card
            item={item}
            id={item.id}
            img={item.download_url}
            first_name={item.author}
            image_url={item.download_url}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 55,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 20,
    textAlign: "center",
    color: "#383f96",
  },
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
    alignItems: "center",
    justifyContent: "center",
  },
  cardDetailsTile: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6D91CB",
    textDecorationLine: "underline",
  },
});
