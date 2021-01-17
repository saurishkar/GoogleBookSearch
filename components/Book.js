import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Book = ({ volumeInfo = {} }) => {
  const { title, authors, publisher, publishedDate, description, pageCount, ratingsCount, averageRating, imageLinks } = volumeInfo;
  const { thumbnail } = imageLinks || {}
  return <View style={styles.container}>
    <View style={styles.thumbnailContainer}>
      <Image style={{ width: 130, height: 200 }} source={{ uri: thumbnail }} />
    </View>
    <View style={styles.detailsContainer}>
      <View style={styles.detailBlock}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.grid}>
            <Text style={{ marginRight: 20 }}>Authors: </Text>
            {(authors || []).map((author) => <Text style={styles.author} key={author}>{author.toUpperCase()},</Text>)}
          </View>
          <View style={styles.grid}>
            <Text style={{ marginRight: 10 }}>Publisher:</Text>
            <Text>{publisher || "NA"}</Text>
          </View>
          <View style={styles.grid}>
            <Text style={{ marginRight: 10 }}>Published on:</Text>
            <Text>{publishedDate || "NA"}</Text>
          </View>
          <View style={styles.desc}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>{description}</Text>
            <View style={styles.grid}>
              <Text style={{ marginRight: 10 }}>Pages:</Text>
              <Text>{pageCount || "NA"}</Text>
            </View>
            <View style={styles.grid}>
              <Text style={{ marginRight: 10 }}>Ratings:</Text>
              <Text>{ratingsCount || "NA"}</Text>
            </View>
            <View style={styles.grid}>
              <Text style={{ marginRight: 10 }}>Average Rating:</Text>
              <Text>{averageRating || "NA"}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}

const gridStyle = {
  display: "flex",
  flexDirection: "row",
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingTop: 20
  },
  thumbnailContainer: {
    padding: 10,
    textAlign: "center",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
  detailsContainer: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 15,
    textAlign: "left",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    marginBottom: 10
  },
  author: {
    marginRight: 5,
    color: "#D35400"
  },
  authors: {
    ...gridStyle
  },
  grid: {
    ...gridStyle
  },
  leftBlock: {
    width: "30%"
  },
  rightBlock: {
    width: "60%",
    paddingLeft: 20
  },
  detailBlock: {
    marginBottom: 20,
    alignItems: "center"
  }
});

export default Book;
