import React,{ useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button, TextInput } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const PlayerModal = (props) => {

    const [name, setName] = useState("");

    const onShow = () => {
        setName(props.name);
    }

    return(
        <Modal visible={props.visible} animationType="fade" transparent={true} onShow={onShow}>
            <View style={[styles.container]}>
                <View style={[styles.card,{padding:10}]}>
                    <Text style={[{fontSize: 20, fontWeight: "bold"}]}>Usuário</Text>
                    <TextInput value={name} onChangeText={(text)=>setName(text)} color="#424242"
                    style={[styles.input,{marginTop:10}]} placeholder="Digite o nome do usuário"/>
                    <View style={[styles.row, {justifyContent:"flex-end", marginTop:10}]}>
                        <TouchableOpacity onPress={props.onClose} style={{marginRight:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16, color:"#107651"}}>
                                CANCELAR
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{props.onSave(name);props.onClose()}} style={[styles.button,{backgroundColor:"#107651"}]}>
                            <Text style={{fontWeight:"bold",fontSize:16, color:"white"}}>
                                SALVAR
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        width:300,
        maxHeight:"90%",
        elevation:5,
        backgroundColor:"white",
        borderRadius:5
    },
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    input:{
        width:"100%",
        height:40,
        borderBottomWidth:1,
        borderColor:"rgba(0,0,0,0.2)",
        color:"#424242"
    },
    button:{
        padding:5,
        paddingHorizontal:20,
        borderRadius:4
    }
})

export default PlayerModal;