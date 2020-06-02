import React, {useEffect, useState} from "react";
import {ImageBackground, StatusBar, View, Button, Text} from "react-native";
import {commonStyles} from "../Styles/mainStyle";
import {BarChart} from "react-native-chart-kit";
import {Card} from 'react-native-elements';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

interface Props{ 
  navigation,
  route
}
export const Summary: React.FC<Props> = (props) => {
  const roundTimeMap = props.route.params.roundTimeMap;
  const [chartData,setChartData] = useState({
    labels: Object.keys(props.route.params.roundTimeMap),
    datasets:[
      {
        data:[Object.values(props.route.params.roundTimeMap)]
      }
    ]
  });
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false // optional
  };

  function getStringTime(time){
    var minutes = Math.floor(time/60);
    var seconds = time % 60;
    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  }
  
  function getRoundInfo(){
    //alert(JSON.stringify(roundTimeMap));
    return Object.entries(roundTimeMap).map(([k,v])=><Text> Round {k} - {getStringTime(v['duration'])}</Text>);
  }
  return (
      <Card  title="Workout Summary">
        <Text>Workout time: {getStringTime(props.route.params.workoutTime)}</Text>
        <Text>Rounds: {props.route.params.workoutRounds} </Text>
        <Text>Analysis:</Text>
        {getRoundInfo()}
      </Card>
    );
}