import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circular}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      borderRadius: 15,
      padding:15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: "#55BCF6",
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
    text: {
      maxWidth: '80%',
    },
});
