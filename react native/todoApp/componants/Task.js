import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style";


export default Task = ({ text,selectedItem,taskList }) => {

    const deleteTask = (selectedItem) => {
        let copyOftaskList = [...taskList]
        copyOftaskList.splice(selectedItem, 1)
        setTaskList(copyOftaskList)
      }
    


    return (
        <>
            <View style={styles.item}>
                <View style={styles.leftItem}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{text}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteTask(index)}>
                <View style={styles.circular}></View>
                </TouchableOpacity>
            </View>
        </>
    )
}