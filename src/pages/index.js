import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import ItemPlayer from "../components/ItemPlayer";
import moment from "moment";

const App = () => {

    const [players, setPlayers] = useState([
        { player:"Jogador 1", points:0 },
        { player:"Jogador 2", points:0 }
    ]);
    
    const [history, setHistory] = useState([]);

    useEffect(()=>{
        let playerWin = players.filter(item=>{
            return item.points>=12;
        });
        if(playerWin.length>0){
            onClean();
        }
    },[players]);

    const onClean = () => {
        let playersTemp = players.map(item=>({...item, points:0}));
        setPlayers(playersTemp);
    }

    const onPoint = (point, player, index) => {
        let playersTemp = players.map(item=>({...item}));
        playersTemp[index].points += point;
        let historyTemp = history.map(item=>({...item}));
        historyTemp.push({
            player: playersTemp[index].player,
            point: point,
            datetime: moment().format()
        });
        setPlayers(playersTemp);
    }

    return(
        <View style={[styles.container]}>
            <ImageBackground source={require("../assets/bg.jpg")} style={{flex:1, alignItems:"center"}} resizeMode="stretch">
                <TouchableOpacity style={[styles.button,{backgroundColor:"#2196F3",borderTopLeftRadius:5,borderBottomLeftRadius:5,right:0}]}  onPress={onClean}>
                    <Icon name="broom" size={20} color="white" />
                    <Text style={{color:"white",marginLeft:5,fontSize:14,fontWeight:"bold"}}>LIMPAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:"#2196F3",borderTopRightRadius:5,borderBottomRightRadius:5,left:0}]}>
                    <Icon name="book" size={20} color="white" />
                    <Text style={{color:"white",marginLeft:5,fontSize:14,fontWeight:"bold"}}>HISTÓRICO</Text>
                </TouchableOpacity>
                <View style={{elevation:1,alignItems:"center"}}><Image source={require("../assets/logo.png")} style={[styles.logo]} resizeMode="contain" /></View>
                <ImageBackground source={require("../assets/madeira.jpg")} style={[styles.madeira]} resizeMode="stretch">
                    <View style={{flexDirection:"row",flex:1}}>
                        {players.map((item,i)=>(
                            <ItemPlayer player={item} key={'player'+i} onPoint={(pt)=>onPoint(pt,item, i)}/>
                        ))}
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
    },
    madeira:{
        width:"90%",
        height:"85%", 
        marginTop:70,  
        borderWidth:1,
        borderColor:'white',
        borderRadius:3,
        zIndex:0
    },
    logo:{
        width:200,
        height:120,
        zIndex:1,
        marginTop:10,
        position:"absolute"
    },
    button:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:20,
        padding:5,
        paddingHorizontal:10,
        elevation:5
    }
});

export default App;