import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>TITLE</Text>
                <Text style={styles.deposit}>$1000</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 100,
        width: width - 50,
        marginBottom: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: "600",
    },
    deposit: {
        fontSize: 35,
        fontWeight: "600",
        color: "green"
    }
});

export default Header;