import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
export default function Centres({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header
                    iconName="storefront-outline"
                    title="GoodStart Early Learning ABC"
                    iconLeft="add-box"
                />
                <View style={styles.detailContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text>Detail Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'yellow'
    },
    Text: {
        fontSize: 25,
    },
    detailContainer: {
        flex: 1,
        backgroundColor: 'red'
    }
});
