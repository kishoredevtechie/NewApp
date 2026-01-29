import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const userData = [
    {
        "id": "u_001",
        "name": "John Doe",
        "email": "john@email.com",
        "role": "Admin",
        "avatarColor": "#76A7FF"
    },
    {
        "id": "u_002",
        "name": "Jane Smith",
        "email": "jane@email.com",
        "role": "Manager",
        "avatarColor": "#FFC98B"
    },
    {
        "id": "u_003",
        "name": "Mike Johnson",
        "email": "mike@email.com",
        "role": "Developer",
        "avatarColor": "#8CE6B0"
    },
    {
        "id": "u_004",
        "name": "Sarah Lee",
        "email": "sarah@email.com",
        "role": "Designer",
        "avatarColor": "#C9B2FF"
    },
    {
        "id": "u_005",
        "name": "Kishore",
        "email": "kishore@email.com",
        "role": "Developer",
        "avatarColor": "#E6EDF1"
    },
    {
        "id": "u_006",
        "name": "Kishore",
        "email": "kishore@email.com",
        "role": "Developer",
        "avatarColor": "#E6EDF1"
    },
    {
        "id": "u_007",
        "name": "Kishore",
        "email": "kishore@email.com",
        "role": "Developer",
        "avatarColor": "#E6EDF1"
    },
    {
        "id": "u_008",
        "name": "Kishore",
        "email": "kishore@email.com",
        "role": "Developer",
        "avatarColor": "#E6EDF1"
    },
    {
        "id": "u_009",
        "name": "Kishore",
        "email": "kishore@email.com",
        "role": "Developer",
        "avatarColor": "#E6EDF1"
    },
]

const UserFlatlist = () => {

    const navigation = useNavigation();

    const userRender = ({ item }) => {
        return (
            <View style={styles.userRow}>
                <View>
                    <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text>{item.email}</Text>
                    <View style={styles.viewProfile}>
                        <Text>Role: {item.role}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('UserProfileCard',{id:item.id,name:item.name,email:item.email,role:item.role,avatarColor:item.avatarColor})}>
                            <Text>View Profile {'>'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    };

    const headerRender = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>Users List</Text>
        </View>
    );

    const footerRender = () => (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.adduserText}>+ Add User</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.mainView}>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={userRender}
                ListHeaderComponent={headerRender}
                ListFooterComponent={footerRender}
                style={{ borderRadius: 10, elevation: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default UserFlatlist


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2183F6',
        paddingHorizontal: 30,
        paddingVertical: 25,
        alignItems: 'center',
    },
    header: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3698FE',
        padding: 15,
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    footer: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userRow: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomColor: '#E6EDF1',
        borderBottomWidth: 1,
        columnGap: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    adduserText: {
        color: '#1D262A',
        fontSize: 18,
        fontWeight: 'bold',
        borderColor: '#000002',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    viewProfile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});