
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons, Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
const CentreItem = ({
    center,
    id
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity key={id} onPress={() => { navigation.navigate('Centre Details', { center }) }}>
            <View style={styles.mainCard} >
                <View style={styles.imageCard}>
                    <Image
                        source={{ uri: center.image }}
                        style={styles.img}
                    />
                    <View style={styles.imgNumber}>
                        <Text style={styles.numberText}>9.8</Text>
                    </View>
                    <View style={styles.logoImg}>
                        <Image
                            source={require('../../assets/images/centres/product1.png')}
                        />
                    </View>
                </View>
                <View style={styles.mainContent}>
                    <Text style={styles.mainTitle}>
                        {center.name}
                    </Text>
                    <View style={styles.mainText}>
                        <Ionicons name="location-outline" size={20} color="#2D1F21" />
                        <Text style={styles.mainSub}>
                            1 Kerrs Road, Castle Hill, NSW 2154
                        </Text>
                    </View>
                    <View
                        style={[styles.mainText, { justifyContent: 'space-between' }]}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name="baby-face-outline"
                                size={20}
                                color="#2D1F21"
                            />
                            <Text style={styles.mainSub}>90 childrens</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name="clipboard-text-outline"
                                size={20}
                                color="#2D1F21"
                            />

                            <Text style={styles.mainSub}>48 waitlisted</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.mainText,
                            {
                                justifyContent: 'space-between',
                            },
                        ]}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5
                                name="temperature-low"
                                size={20}
                                color="#2D1F21"
                            />

                            <TouchableOpacity
                                style={[
                                    styles.kindiCareButton,
                                    { backgroundColor: '#E9F4FF' },
                                ]}
                            >
                                <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                                    KindiCare Basic
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5
                                name="hand-holding-water"
                                size={20}
                                color="#2D1F21"
                            />
                            <Text style={[styles.mainSub, { marginRight: 15 }]}>
                                4 services
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CentreItem;

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginTop: 20,
    },
    img: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    icon: {
        marginTop: 4,
    },
    imgNumber: {
        position: 'absolute',
        top: 12,
        left: 10,
        width: 35,
        height: 30,
        padding: 5,
        backgroundColor: '#DB147F',
        borderRadius: 6,
    },
    numberText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    logoImg: {
        position: 'absolute',
        right: 10,
        bottom: 12,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    mainContent: {
        padding: 15,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    mainTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D1F21',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.02,
    },
    mainText: {
        flexDirection: 'row',
        marginTop: 12,
    },
    kindiCareButton: {
        marginTop: -4,
        marginLeft: 10,
        padding: 5,
        borderRadius: 6,
    },
    kindiCareText: {
        alignContent: 'center',
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 16,
        letterSpacing: 0.02,
    },
    mainSub: {
        marginLeft: 10,
        fontSize: 14,
        color: '#2D1F21',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.02,
        alignContent: 'center',
    },
});