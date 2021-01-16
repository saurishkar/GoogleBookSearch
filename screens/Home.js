import React from "react";
import { View, Text, Button, TextInput } from "react-native";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      images: []
    };

    this.fetchImages = this.fetchImages.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  fetchImages() {
    const { searchQuery } = this.state;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers`)
    .then((response) => {
      response.json().then((data) => {
        this.setState({
          images: [].concat(this.state.images, data.items)
        });
      });
    });
  }

  handleInputChange(text) {
    this.setState({
      searchQuery: text
    });
  }

  render() {
    console.log(this.state.images);
    return <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={this.handleInputChange}
        value={this.state.searchQuery}
      />
      <Button title="Search" onPress={this.fetchImages} />
      <View style={{ display: ""}}>
        {this.state.images.map(({ id, volumeInfo }) => {
          return <View key={id} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <img src={volumeInfo.imageLinks.thumbnail} />
          </View>
        })}
      </View>
    </View>
  }
}

export default Home;