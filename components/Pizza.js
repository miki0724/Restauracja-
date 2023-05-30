import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Pizza = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#a4230e",
          borderRadius: 20,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
        }}
      >
        <View>
          <Image
            style={{ width: 80, height: 80, borderRadius: 20 }}
            source={{ uri: item.image }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: 16,
              margin: 10,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "#FFCF00",
              fontSize: 19,
              fontWeight: 600,
              marginLeft: 10,
            }}
          >
            {item.price} zł
          </Text>
        </View>

        <Pressable style={{ marginLeft: "auto", marginRight: 10 }}>
          <Text
            style={{
              backgroundColor: "#FFCF00",
              borderRadius: 20,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
              fontWeight: 600,
            }}
          >
            KUPUJE
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default Pizza;

const styles = StyleSheet.create({});
