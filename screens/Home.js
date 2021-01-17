import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";

import Book from "../components/Book";

import { mockData } from "../constants/book";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      books: [],
      currentBook: null,
      isLoading: false,
    };

    this.fetchImages = this.fetchImages.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toggleLoader = this.toggleLoader.bind(this);
    this.viewBook = this.viewBook.bind(this);
  }

  fetchImages() {
    const { searchQuery } = this.state;

    // fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
    // .then((response) => {
    // response.json().then((data) => {
    this.toggleLoader(true);
    setTimeout(() => {
      this.setState({
        // images: [].concat(this.state.images, data.items),
        books: mockData,
        isLoading: false,
      });
    }, 3000);
    // });
    // });
  }

  handleInputChange(text) {
    this.setState({
      searchQuery: text,
    });
  }

  toggleLoader(isLoading = false) {
    this.setState({ isLoading });
  }

  viewBook(bookId) {
    this.setState(({ books }) => {
      return {
        currentBook: books.find(({ id }) => id === bookId),
      };
    });
  }

  renderItem({ item: { id, volumeInfo } }) {
    return (
      <View key={id} style={styles.bookContainer}>
        <Pressable onPress={() => this.viewBook(id)}>
          <Image
            style={styles.image}
            source={{ uri: volumeInfo.imageLinks.thumbnail }}
          />
        </Pressable>
      </View>
    );
  }

  render() {
    const { currentBook, books, searchQuery, isLoading } = this.state;
    console.log(123, currentBook);
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleInputChange}
            value={searchQuery}
          />
          <Button onPress={this.fetchImages} style={styles.searchBtn} loading={isLoading}>
            Search
          </Button>
          <View style={styles.bookList}>
            <FlatList
              data={books}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
          {currentBook && <Book {...currentBook} />}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    paddingLeft: 20,
    paddingRight: 20,
    margin: "auto",
    textAlign: "center",
    top: 0,
  },
  textInput: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },
  searchBtn: {
    margin: "auto",
    justifyContent: "center",
  },
  bookList: {
    width: "100%",
    height: 200,
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // overflow: "scroll",
  },
  bookContainer: {
    width: "auto",
    position: "relative",
    marginRight: 20,
    // flexBasis: "auto",
  },
  image: {
    height: 200,
    width: 130,
  },
});

export default Home;
