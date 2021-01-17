import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button } from "react-native-paper";

import Book from "../components/Book";

import Books from "./Books";

import { mockData } from "../constants/book";

class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/icons/google-books-icon.png")} />
        <Text style={{ marginBottom: 50 }}>Search Google books</Text>
        <Button onPress={() => navigation.navigate("Books")}>
          Go To Books
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 200,
    margin: "auto",
  }
});

export default Home;
