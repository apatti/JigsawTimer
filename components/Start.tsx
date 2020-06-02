import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {commonStyles} from "../Styles/mainStyle";

interface Props{
    navigation,
    route
}
export const StartComponent: React.FC<Props> = (props) => {
    const  [secondsLeft, setSecondsLeft] = useState(props.route.params.prepareTime);


    useEffect(()=>{
        let interval=null;
        if(secondsLeft>0){
            interval = setInterval(()=>{
                setSecondsLeft(secondsLeft=>secondsLeft-1);
            },1000);
        }
        else{
            props.navigation.replace(props.route.params.nextScreen,props.route.params);
        }
        return ()=>clearInterval(interval);
    },[secondsLeft]);
    
    return (
    <View style={commonStyles.TimeContainer}>
        <Text style={commonStyles.startTimeText}>
            {secondsLeft}
        </Text>
    </View>);

}