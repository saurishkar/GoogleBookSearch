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
import { Button, Searchbar } from "react-native-paper";

import Book from "../components/Book";

import { mockData } from "../constants/book";

class Books extends React.Component {
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
    this.toggleLoader(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`).then(
      (response) => {
        response.json().then((data) => {
          this.setState(({ books }) => ({
            books: data.items,
            isLoading: false,
          }));
        });
      }
    );
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
    const btnDisabled = !searchQuery.trim();
    // const btnStyle = Object.assign({}, styles.searchBtn, btnDisabled ? styles.btnDisabled : {});
    return (
      <View style={styles.container}>
        <Searchbar
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={this.handleInputChange}
          value={searchQuery}
        />
        <Button
          onPress={this.fetchImages}
          color="#1ABC9C"
          style={styles.searchBtn}
          labelStyle={styles.btnLabel}
          loading={isLoading}
          mode="contained"
          disabled={btnDisabled}
        >
          Search
        </Button>
        <ScrollView>
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
  searchInput: {
    width: "100%",
    padding: 2,
    marginTop: 20,
    marginBottom: 5,
  },
  searchBtn: {
    margin: "auto",
    justifyContent: "center",
  },
  btnLabel: {
    color: "#FFFFFF"
  },
  bookList: {
    width: "100%",
    height: 200,
  },
  bookContainer: {
    width: "auto",
    position: "relative",
    marginRight: 20,
  },
  image: {
    height: 200,
    width: 130,
  },
});

export default Books;
