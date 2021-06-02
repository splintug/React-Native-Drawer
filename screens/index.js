import React from 'react';
import Screen from './Screen';
import {Text,View } from 'react-native';

export const HomeScreen = ({navigation}) => { return(
    <Screen navigation={navigation} name="Home" content={
    <View style={ {flex:1,justifyContent:"center",alignItems:"center"} }>
       <Text> Hello again </Text>
    </View>}
     />
    )
}
export const ProfileScreen = ({navigation}) =><Screen navigation={navigation} name="Profile" />
export const MessagesScreen = ({navigation}) =><Screen navigation={navigation} name="Messages" />
export const ActivityScreen = ({navigation}) =><Screen navigation={navigation} name="Activity" />
export const ReportScreen = ({navigation}) =><Screen navigation={navigation} name="Report" />
export const StatisticsScreen = ({navigation}) =><Screen navigation={navigation} name="Stats" />
export const ResetScreen = ({navigation}) =><Screen navigation={navigation} name="Reset Password" />
export const TestScreen = ({navigation}) =><Screen navigation={navigation} name="Test Screen" />