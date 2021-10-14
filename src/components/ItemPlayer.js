import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ItemPlayer = (props) => {
    const player = props.player;
    const points = [1,3,6,9];

    return(
        <View style={[styles.containerPlayer]}>
            <View style={{backgroundColor:"white",width:"100%", padding:5,marginTop:40,flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"#212121", fontSize:20}}>{player.player}</Text>
                <TouchableOpacity style={[styles.btnEdit]}>
                    <Icon name="pencil" size={20} color="#212121"/>
                </TouchableOpacity>
            </View>
            <Text style={[styles.point]}>{player.points}</Text>
            <View style={{width:"100%",flex:1,justifyContent:"space-between",padding:10}}>
                {points.map(pt=>(
                    <TouchableOpacity style={[styles.btn]} onPress={()=>props.onPoint(pt)}>
                        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>
                            + {pt}
                        </Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={[styles.btn,{backgroundColor:"#F44336"}]} onPress={()=>props.onPoint(-1)}>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>
                        - 1
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPlayer:{
        width:"50%",
        height:"100%",
        alignItems:"center",
        borderColor:"white",
        borderWidth:2
    },
    point:{
        color:"white",
        fontSize:100,
        fontWeight:"bold"
    },
    btn:{
        width:"100%",
        height:50,
        backgroundColor:"#212121",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        elevation:5,
        borderWidth:1,
        borderColor:"white"
    },
    btnEdit:{
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#212121",
        borderRadius:3
    }
})

export default ItemPlayer;