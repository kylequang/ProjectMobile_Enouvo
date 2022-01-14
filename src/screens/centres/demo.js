Khưa Nhí
import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    LogBox,
} from 'react-native';
import { auth, db } from '../firebase';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

const HomeScreen = () => {
  
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');

    useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer']);
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);
    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <View>
                <TextInput
                    placeholder="Enter your name"
                    value={newName}
                    onChangeText={(text) => setNewName(text)}
                />
                <TextInput
                    placeholder="Enter your age"
                    keyboardType="numeric"
                    value={newAge}
                    onChangeText={(text) => setNewAge(text)}
                />
            </View>
            <TouchableOpacity
                style={{ padding: 5, backgroundColor: '#dff' }}
                onPress={createUser}
            >
                <Text>Create User</Text>
            </TouchableOpacity>
            {users.map((user) => {
                return (
                    <View key={user.id}>
                        <Text>Name: {user.name}</Text>
                        <Text>Age: {user.age}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});