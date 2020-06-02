import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  startButton:{
    alignSelf:'center',
    justifyContent:'center',
    padding:20,
    width:200
  },
  userIdText:{
    padding:10,
    fontWeight:'bold',
    color:'plum',
  },
  alertText:{
    padding:10,
    fontWeight:'bold',
    color:'orangered',
  },
  normalText:{
      paddingRight:10
  },
  startTimeText:{
    fontSize: 180
  },
  timeText:{
    alignSelf:'center',
    fontSize: 125
  },
  roundText:{
    alignSelf:'center',
    fontSize: 100,
    padding:10
  },
  TimeContainer:{
    flex:1,
    justifyContent:'center',
    alignSelf:'center'
  },
  ClockContainer:{
    flex:1,
    justifyContent:'space-evenly',
    alignSelf:'stretch'
  },
  RoundContainer:{
    flex:1,
    justifyContent:'center',
    alignSelf:'center'
  },
  PauseEndButtons:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  RoundButton:{
    width: 200,
    backgroundColor:'green'
  },
  PauseButton:{
    backgroundColor:'yellow',
    width: 100
  },
  EndButton:{
    backgroundColor:"red",
    width: 100
  },
  SummaryContainer:{
    flex:1,
    justifyContent:'space-evenly',
    alignSelf:'stretch'
  }
});
