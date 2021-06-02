import React from 'react';
import {View,Text,StyleSheet,ScrollView,ImageBackground,Image} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Sidebar = (props) => {
    return (
    <ScrollView style={styles.wrapper}>
        <ImageBackground
            source={ require('../assets/images/menuback.jpg') }
            style={styles.backGround}
        >
        <View style={ styles.closeBtnWrapper }>
         <TouchableOpacity 
              style={ styles.closebtn }
              onPress={ ()=>props.navigation.closeDrawer() }
               >
              <Ionicons name="close" size={30} color="#EEEEEE" />
         </TouchableOpacity>
         </View>

         <Image source={ require('../assets/images/avatar.png')} style= {styles.profile} />
         <Text style={styles.name}>Henry Nkuke</Text>

         <View style={ {flexDirection:"row"} }>
             
             <Ionicons name="ios-person" size={16} color="#EEE" />
             <Text style={styles.account}>YOY767676</Text>

             <Ionicons style={ {marginLeft:12}} name="ios-briefcase" size={16} color="#EEE" />
             <Text style={styles.account}>UGX 45,000,000</Text>
         </View>
        
        </ImageBackground>

        <View styl={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>

    </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    backGround:{
        width:undefined,
        padding:16,
        paddingTop:48,
    },
    container:{
        flex:1
    },
    profile:{
        width:90,
        height:90,
        borderRadius:50,
        borderWidth:3,
        borderColor:"#FFF",
        backgroundColor:"#FFF"
    },
    name:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"700",
        marginVertical:8
    },
    account:{
        color:"#EEE",
        fontSize:13,
        marginLeft:8
    },
    closeBtnWrapper:{
        alignItems:"flex-end",
    },
    closebtn:{
        top:-30,
        zIndex:60,
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        backgroundColor:"rgba(65, 66, 69,0.5)"
    }
})

export default Sidebar;