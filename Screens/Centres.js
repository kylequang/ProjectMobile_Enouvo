import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Centres() {
    return (
        <SafeAreaView >
        <View style={styles.container}>
            <Text style={styles.Text}>Centres content</Text>
        </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    Text:{
        fontSize:25
    }
});
