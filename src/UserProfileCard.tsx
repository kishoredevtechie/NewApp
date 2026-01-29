import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect } from 'react';

export default function UserProfileCard({ route }) {

    const { id, name, email, role, avatarColor } = route.params;

    useEffect(() => {
        console.log(route);
    }, []);

    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <Text style={styles.titleFont}>View Profile</Text>
            </View>
            <View style={styles.avatarRow}>
                <View style={[styles.avatar, { backgroundColor: avatarColor }]}></View>
                <View style={styles.avatarrowDetails}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{name}</Text>
                    <Text>{email}</Text>
                    <Text>Role: {role}</Text>
                </View>
            </View>
            <View style={styles.detailsRow}>
                <View><Text style={styles.detailsTitle}>Details</Text></View>
                <View><Text style={styles.detailsText}>Name</Text><Text style={styles.detailsText}>{name}</Text></View>
                <View><Text style={styles.detailsText}>Email</Text><Text style={styles.detailsText}>{email}</Text></View>
            </View>
            <View style={styles.footerRow}>
                <TouchableOpacity>
                    <Text style={styles.footerFont}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#2183F6',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    titleView: {
        backgroundColor: '#2183F6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    avatarRow: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomColor: '#f1eaeaff',
        borderBottomWidth: 1,
    },
    detailsRow: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        height: 175,
        borderBottomColor: '#f1eaeaff',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    footerRow: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    titleFont: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileCard: {

    },
    footerFont: {
        color: '#1D262A',
        fontSize: 18,
        fontWeight: 'bold',
        borderColor: '#000002',
        borderWidth: 1,
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    detailsTitle: {
        color: '#1D262A',
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailsText: {
        color: '#1D262A',
        fontSize: 14,
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    avatarrowDetails: {
        marginLeft: 20,
        height: 75,
        justifyContent: 'space-between'
    }
});