import React from "react";
import { View, Text } from "react-native";
import { styles } from "../style";


export default Task = ({ text }) => {

    return (
        <>
            <View style={styles.item}>
                <View style={styles.leftItem}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{text}</Text>
                </View>
                <View style={styles.circular}></View>
            </View>
        </>
    )
}