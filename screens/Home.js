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
    fetch(`https://api.imgur.com/3/gallery/search?q=${searchQuery}`)
    .then((response) => {
      this.setState({
        images: Object.assign({} , this.state.images, response.images)
      });
      return response.images;
    });
  }

  handleInputChange(text) {
    this.setState({
      searchQuery: text
    });
  }

  render() {
    return <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={this.handleInputChange}
        value={this.state.searchQuery}
      />
      <Button title="Search" onPress={this.fetchImages} />
      {this.state.images.map(({ id, link }) => {
        return <View key={id}>
          <img src={link} />
        </View>
      })}
    </View>
  }
}

export default Home;