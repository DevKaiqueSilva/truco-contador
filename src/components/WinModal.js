
import React, { useRef } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

const WinModal = (props) => {
    const animationWin = useRef(null);

    const onShow = () => {
      
        setTimeout(() => {
            animationWin.current.play();
        }, 1);
        setTimeout(() => {
            props.onClose();
        }, 4000);
    }
    return(
        <Modal visible={props.visible} animationType="fade" ontr transparent={true} onShow={onShow}>
            <View style={[styles.container]}>
                <LottieView
                    ref={animationWin} loop
                    style={{width:300,height:300}}
                    source={require('../assets/winner.json')}
                />
                <View style={{backgroundColor:"#107651", paddingHorizontal:30,borderRadius:100,paddingVertical:5}}>
                    <Text style={[styles.winner]}>{props.player.player} GANHOU!!</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "center",
        alignItems: "center"
    },
    winner:{
        fontSize:16,
        fontWeight:"bold",
        color:"white",
        textTransform:"uppercase",
        textAlign:"center",
        marginVertical:5,

    }
})

export default WinModal;
