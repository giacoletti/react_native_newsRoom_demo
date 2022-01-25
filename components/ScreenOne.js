import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ScreenOne = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://yesterdays-news-api.herokuapp.com/api/articles"
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articleDisplay = articles.map((article) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("two", { id: article.id, title: article.title })}
      >
        <View style={styles.list}>
          <Text>{article.title}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <Text>Screen One</Text>
      {articleDisplay}
      <Button
        title="Press me!"
        onPress={() => navigation.navigate("two", { foo: "Bar" })}
      />
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  list: {
    height: 30
  }
});
