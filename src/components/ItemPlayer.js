import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PlayerModal from "../components/PlayerModal";

const ItemPlayer = (props) => {
    const player = props.player;
    const points = [ 1, 3, 6, 9 ];
    const [showPlayerName, setShowPlayerName] = useState(false);

    return(
        <View style={[styles.containerPlayer]}>
            <PlayerModal visible={showPlayerName} name={player.player} onClose={()=>setShowPlayerName(false)} onSave={(name)=>{props.onChangeName(name)}}/>
            <View style={[styles.playerName]}>
                <Text style={{color:"#212121", fontSize:18,width:"70%"}} ellipsizeMode={"tail"} numberOfLines={1}>{player.player}</Text>
                <TouchableOpacity style={[styles.btnEdit]} key="perfil" onPress={()=>setShowPlayerName(true)}>
                    <Icon name="pencil" size={20} color="#212121"/>
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",alignItems:"center"}}>
                <Text style={[styles.point,{fontSize:15,position:"absolute", left:5, top:5}]}>Vitórias: {player.win}</Text>
                <Text style={[styles.point,{marginTop:5}]}>{player.points}</Text>
            </View>
            <View style={{width:"100%",flex:1,justifyContent:"space-between",padding:10}}>
                {points.map((pt,i)=>(
                    <TouchableOpacity style={[styles.btn]} onPress={()=>props.onPoint(pt)} key={`point${pt}`}>
                        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>
                            + {pt}
                        </Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={[styles.btn,{backgroundColor:"#F44336"}]} onPress={()=>props.onPoint(-1)} key="pointNeg">
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
        borderColor:"white",
    },
    btnEdit:{
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#212121",
        borderRadius:3,
        marginLeft:10
    },
    playerName:{
        backgroundColor:"white",
        width:"100%", 
        padding:5,
        marginTop:40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default ItemPlayer;