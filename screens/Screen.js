import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const mainColor="#161924";

const Screen = (props) => {

        return ( 
        <View style={ styles.container }> 
        <SafeAreaView>
                <TouchableOpacity 
                style={styles.menuBtn}
                onPress={ props.navigation.openDrawer }
                >
                   <FontAwesome5 name="bars" size={24} color={mainColor}/>     
                </TouchableOpacity>
                
                <View style={styles.contents}>
                        <Text style={styles.text}>
                                {props.name} Screen
                        </Text>
                        {
                                props.content || <Text></Text>
                        }
                </View>

        </SafeAreaView>
        </View>
        )
        }

        const styles = StyleSheet.create({
                container:{
                        flex:1,
                        maxWidth:"100%"
                },
                menuBtn:{
                        alignItems:"flex-start",
                        margin:16
                },
                contents:{
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center"
                },
                text:{
                        color: mainColor,
                        fontSize:20,
                        fontWeight:"500"
                }
        })

        export default Screen;
        