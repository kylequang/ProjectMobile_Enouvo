import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../firebase';

export default function getTestData() {
    const [users, setUser] = useState([])

    useEffect(() => {
        db.collection('Users')
            .get()
            .then(result => result.docs)
            .then(docs => docs.map(doc => ({
                id: doc.data().id,
                name: doc.data().name
            })))
            .then(users => setUser(users))
        console.log(users)
    }, [])


    return (
        <SafeAreaView>
            <View>
                {
                    users?.map(user =>
                        <View>
                            <Text>{user.name}</Text>
                            <Text>{ }</Text>
                        </View>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

