import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {commonStyles} from "../Styles/mainStyle";
import {mainTheme} from "../Styles/Themes";
import {ThemeProvider,Button} from "react-native-elements";

interface Props{
    navigation,
    route
}
export const ClockComponent: React.FC<Props> = (props) => {
    const  [enableRoundCount] = useState(props.route.params.enableRounds);
    const  [roundCount] = useState(props.route.params.roundCount);
    const  [currentRoundCount,setCurrentRoundCount] = useState(0);
    const [currentTime,setCurrentTime] = useState(0);
    const [paused,setPaused] = useState(false);
    const [end,setEnd] = useState(false);
    const [roundTimeMap,setRoundTimeMap] = useState({});
    const [previousRoundTime, setPreviousRoundTime]=useState(0);

    useEffect(()=>{
        let interval=null;
        if(!(paused||end) && (!enableRoundCount || (enableRoundCount&&currentRoundCount<roundCount))){
            interval = setInterval(()=>{
                setCurrentTime(time=>time+1);
            },1000);
        }
        return ()=>clearInterval(interval);
    },[currentTime]);
    
    function getTime(){
        var t = currentTime;
        var minutes = Math.floor(t/60);
        var seconds = t % 60;
        return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }

    function endActivity(){
        if(!paused){ // End activity
            setEnd(true);
            props.navigation.navigate('SummaryTab',{
                activity:"clock",
                workoutTime:currentTime,
                workoutRounds:currentRoundCount,
                totalRounds:roundCount,
                roundTimeMap:roundTimeMap
            });
        }
        else{
            setCurrentTime(0);
            setCurrentRoundCount(0);
            setPaused(false);
        }
    }

    function getRoundInfo(){
        if(enableRoundCount){
            if(currentRoundCount>roundCount){
                //alert("Workout Completed!!");
                setPaused(true);
                endActivity();
                return "Workout Complete!!";
            }
            return `${currentRoundCount}/${roundCount}`;
        }
        else{
            return currentRoundCount;
        }
    }

    return (
    <View style={commonStyles.ClockContainer}>
        <ThemeProvider theme={mainTheme}>
            <View>
                <Text style={commonStyles.timeText}>
                    {getTime()}
                </Text>
            </View>
            <View style={commonStyles.PauseEndButtons}>
                <View>
                    <Button
                        title={!paused? "Pause" : "Resume"}
                        buttonStyle={commonStyles.PauseButton}
                        onPress={()=>{
                            if(paused){
                                setCurrentTime(currentTime+1);
                            }
                            setPaused(!paused);
                            }}/>
                </View>
                <View>
                    <Button
                    title={!paused? "End" : "Reset"}
                    buttonStyle={commonStyles.EndButton}
                    onPress={()=>endActivity()}/>
                </View>
            </View>
            <View>
                <Text style={commonStyles.roundText}>
                    {getRoundInfo()}
                </Text>
                <View style={commonStyles.RoundContainer}>
                    <Button
                        title="Round"
                        buttonStyle={commonStyles.RoundButton}
                        disabled={paused||(enableRoundCount && currentRoundCount>roundCount)}
                        onPress={()=>{
                            setRoundTimeMap(prevState => {
                                return {...prevState,[currentRoundCount]: {
                                    time:currentTime,
                                    duration:currentTime-previousRoundTime}}
                            });
                            setPreviousRoundTime(currentTime);
                            setCurrentRoundCount(currentRoundCount+1);
                            }}/>
                </View>
            </View>
        </ThemeProvider>
    </View>);

}