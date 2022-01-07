import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function Dashboard() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <Text style={styles.styleText}>Icon</Text>
                    <Text style={styles.styleText}>Goodstart Early Learning ABC </Text>
                    <Text style={styles.styleText}>Icon</Text>
                </View>
            </View>

            <View style={styles.contentContainer}>

                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.styleText}>Icon</Text>
                        <Text style={styles.styleTextTitle}>Application</Text>
                        <Text style={styles.countNumber}>17</Text>
                    </View>
                    <View style={styles.cardLine}>
                    </View>
                    <View style={styles.cardFrame}>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Open Application Value</Text>
                            <Text style={styles.styleText}>116,688,8</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Total Waitlisted</Text>
                            <Text style={styles.styleText}>3</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Waitlist Value</Text>
                            <Text style={styles.styleText}>$29,749 p.a</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.styleText}>Icon</Text>
                        <Text style={styles.styleTextTitle}>Total Activities</Text>
                        <Text style={styles.countNumber}>17</Text>
                    </View>
                    <View style={styles.cardLine}>
                    </View>
                    <View style={styles.cardFrame}>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Mailbox Received</Text>
                            <Text style={styles.styleText}>342</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Mailbox Awaiting Reply</Text>
                            <Text style={styles.styleText}>6</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Task Overdue</Text>
                            <Text style={styles.styleText}>2</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.styleText}>Icon</Text>
                        <Text style={styles.styleTextTitle}>Total Centres </Text>
                        <Text style={styles.countNumber}>32</Text>
                    </View>
                    <View style={styles.cardLine}>
                    </View>
                    <View style={styles.cardFrame}>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Total Places</Text>
                            <Text style={styles.styleText}>160</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Enrolment Coverage</Text>
                            <Text style={styles.styleText}>72%</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.styleText}>Average Enquiry{"\n"} Response Time</Text>
                            <Text style={styles.styleText}>24 hrs 36 mins</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        height: 136,
        width: '100%',
        backgroundColor: '#DB147F',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        padding: 20,
    },
    contentHeader: {
        marginTop: 40,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cardContent: {
        height: 180,
        borderColor: '#F2F2F2',
        padding: 16,
        marginBottom: 16,
        marginTop: 16,
        position: 'relative',
        top: -50,
        borderRadius: 20,
        backgroundColor: 'white',

    },
    cardHeader: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardLine: {
        height: 1,
        marginBottom: 15,
        backgroundColor: '#F2F2F2',
    },
    cardFrame: {
        height: 102,
        justifyContent: 'space-between'
    },
    styleTextTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#25282B'
    },
    countNumber: {
        fontSize: 20,
    },
    styleText: {
        fontSize: 16,
        fontWeight: "400"
    }
});