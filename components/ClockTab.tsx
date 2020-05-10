import React, {useEffect, useState} from "react";
import {View, Button, Text, Switch, Picker,TouchableOpacity} from "react-native";
import {commonStyles} from "../Styles/mainStyle";

interface Props{

}
export const ClockTab: React.FC<Props> = (props) => {
    const [isRoundsEnabled, enableRounds] = useState(false);
    const [roundCount,setRoundCount] = useState(0);
    return (
        <View style={commonStyles.mainContainer}>
            <View style={{justifyContent:"center"}}>
                <View style={{flexDirection:"row", justifyContent:"center", paddingBottom:20}}>
                    <Text style={commonStyles.normalText}>Rounds</Text>
                    <Switch 
                        value={isRoundsEnabled}
                        onValueChange={v=>enableRounds(v)}
                        style={{alignItems:"center"}}/>
                </View>
                <View style={[{
                    borderWidth:2,
                    borderRadius: 10,alignSelf:"center"},
                    isRoundsEnabled?{borderColor:'black'}:{borderColor:"gray"}]}>
                <Picker selectedValue={roundCount}
                    onValueChange={(itemValue,itemIndex)=>setRoundCount(itemValue)}
                    enabled={isRoundsEnabled}
                    style={{height: 50, width: 150, alignSelf:"center" }}
                >
                    {Array.from({length:100},(_,i)=>i).map((item,idx)=>{
                        return (<Picker.Item label={item.toString()} value={idx} key={idx}/>)
                    })}
                </Picker>
                </View>
            </View>
            <View style={commonStyles.startButton}>
                <Button
                    title="Start"
                    onPress={()=>true}/>
            </View>
        </View>
      );
}