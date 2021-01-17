import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const mockBook = {
  "kind": "books#volume",
  "id": "6e4cDvhrKhgC",
  "etag": "7yFIZqHSAV8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/6e4cDvhrKhgC",
  "volumeInfo": {
    "title": "Steve Jobs",
    "authors": [
      "Walter Isaacson",
      "STEVE JOBS"
    ],
    "publisher": "Simon and Schuster",
    "publishedDate": "2011-10-24",
    "description": "Draws on more than forty interviews with Steve Jobs, as well as interviews with family members, friends, competitors, and colleagues to offer a look at the co-founder and leading creative force behind the Apple computer company.",
    "industryIdentifiers": [
      {
        "type": "ISBN_13",
        "identifier": "9781451648539"
      },
      {
        "type": "ISBN_10",
        "identifier": "1451648537"
      }
    ],
    "readingModes": {
      "text": true,
      "image": false
    },
    "pageCount": 630,
    "printType": "BOOK",
    "categories": [
      "Biography & Autobiography"
    ],
    "averageRating": 4,
    "ratingsCount": 3935,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "0.8.6.0.preview.2",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=6e4cDvhrKhgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=6e4cDvhrKhgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.in/books?id=6e4cDvhrKhgC&printsec=frontcover&dq=steve+jobs&hl=&cd=1&source=gbs_api",
    "infoLink": "http://books.google.co.in/books?id=6e4cDvhrKhgC&dq=steve+jobs&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Steve_Jobs.html?hl=&id=6e4cDvhrKhgC"
  },
  "saleInfo": {
    "country": "IN",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "IN",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
      "isAvailable": true,
      "acsTokenLink": "http://books.google.co.in/books/download/Steve_Jobs-sample-epub.acsm?id=6e4cDvhrKhgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=6e4cDvhrKhgC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {
    "textSnippet": "Draws on more than forty interviews with Steve Jobs, as well as interviews with family members, friends, competitors, and colleagues to offer a look at the co-founder and leading creative force behind the Apple computer company."
  }
};

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
            <Text>{publisher}</Text>
          </View>
          <View style={styles.grid}>
            <Text style={{ marginRight: 10 }}>Published on:</Text>
            <Text>{publishedDate}</Text>
          </View>
          <View style={styles.desc}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>{description}</Text>
            <View style={styles.grid}>
              <Text style={{ marginRight: 10 }}>Pages:</Text>
              <Text>{pageCount}</Text>
            </View>
            <View style={styles.grid}>
              <Text style={{ marginRight: 10 }}>Ratings:</Text>
              <Text>{ratingsCount}</Text>
            </View>
            <View style={styles.grid}>
              <Text style={{ marginRight: 10 }}>Average Rating:</Text>
              <Text>{averageRating}</Text>
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
