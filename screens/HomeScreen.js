import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Card from "../components/Card";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setPage((prev) => prev + 1);
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      const data = await response.json();
      if (page > 1) {
        setData((prevData) => [...prevData, ...data]);
      } else {
        setData(data);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Zameen.com Interview Project</Text>
        {loading ? <ActivityIndicator size="large" color="#383f96" /> : null}
        <FlatList
          data={data}
          onEndReached={fetchData}
          onEndReachedThreshold={0.5}
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
    </>
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
  loading: { textAlign: "center" },
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
