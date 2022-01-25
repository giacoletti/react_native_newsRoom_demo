import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ScreenTwo = ({ navigation, route }) => {
  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    const {
      data
    } = await axios.get(
      `https://yesterdays-news-api.herokuapp.com/api/articles/${route.params.id}`
    );
    setArticle(data.article)
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <View>
      <Text>{article.title}</Text>
      <View>
        <Text>{article.body}</Text>
      </View>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({});
