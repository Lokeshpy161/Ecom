import React, {useState} from "react";
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import { faMagnifyingGlass, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import BottomBar from './BottomBar'; 



const Cart = ({ navigation }) => {
    
    const gotosingleproduct = () => {
        navigation.navigate('SProduct');
    };

    return(
        <View style={styles.containerw}>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.topbarinput}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
                    <TextInput placeholder="Search Sunlight.in" style={styles.inputBox} />
                    <FontAwesomeIcon icon={faUsersViewfinder} size={20} color="black" />
                    </View>
                    <StatusBar style="auto" />
                </View>
                <Text>CART</Text>
                <View>
                    <TouchableOpacity style={styles.proceedButton} onPress={gotosingleproduct}>
                    <Text style={styles.buttonText}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BottomBar navigation={navigation} />
            <View style={styles.blueBar}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerw:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    blueBar: {
        backgroundColor: '#1977F3',
        height: 15,
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
      },
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "#1977F3",
        paddingBottom: 15,
    },
    topbarinput: {
        justifyContent: "center",
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
    },
    inputBox: {
        flex: 1,
        color: "#1977F3",
        marginLeft: 10,
    },
    proceedButton: {
        backgroundColor: '#FF9900',
        borderRadius: 16,
        padding: 13,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
})

export default Cart;
