import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const HistoryModal = (props) => {
    return(
        <Modal visible={props.visible} animationType="fade" transparent={true}>
            <View style={[styles.container]}>
                <View style={[styles.card]}>
                    <View style={[styles.row,{backgroundColor:"#107651", justifyContent:"space-between",padding:10}]}>
                        <TouchableOpacity style={{width:25}} onPress={props.onClose}>
                            <Icon name="close" size={25} color="white"/>
                        </TouchableOpacity>
                        <Text style={[{fontSize:20, fontWeight:"bold", color:"white"}]}>HISTÓRICO</Text>
                        <View style={{width:25}}/>
                    </View>
                    <ScrollView contentContainerStyle={{padding:10}}>
                        {
                        props.history.length>0
                        ?
                        props.history.map((item,i)=>(
                            <View key={`history${i}`}>
                                <View style={[styles.row,styles.move]} >
                                    <Text style={[styles.moveText]}>{item.player}</Text>
                                    <Text style={[styles.moveText,{color:item.point<0?"red":"green",fontWeight:"bold"}]}>
                                        {item.point<0?'':'+ '}{item.point} (=) {item.total}
                                    </Text>
                                </View>
                                {item.win==true?
                                    <View style={{borderBottomWidth:2,borderBottomColor:"#107651"}}>
                                        <Text style={[styles.winner]}>{item.player} VENCEU!!</Text>
                                    </View>
                                :null}
                            </View>
                        ))
                        :
                        <Text style={{textAlign:"center",fontSize:16}}>SEM HISTÓRICO</Text>
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center"
    },
    card:{
        width:"90%",
        maxHeight:"90%",
        elevation:5,
        backgroundColor:"white",
        borderRadius:5
    },
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    move:{
        paddingVertical:5,
        justifyContent:"space-between",
        borderBottomWidth:1, 
        borderBottomColor:"rgba(0,0,0,0.1)"
    },
    moveText:{
        fontSize:15,
        color:"#212121"
    },
    winner:{
        fontSize:16,
        fontWeight:"bold",
        color:"#107651",
        textTransform:"uppercase",
        textAlign:"center",
        marginVertical:5,

    }
})

export default HistoryModal;