import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const MainPage = ({ navigation }) =>  {
    return (
        <View style={{flex: 1}}>
            <Image source={{ uri:'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/amiibo_4/H2x1_Amiibo_main_image1600w.jpg' }}  style={{width:"100%", height:"96%"}}/>
            <Button title="Search" onPress={() => navigation.navigate('Search')} />
        </View>
    )
}


export default MainPage;