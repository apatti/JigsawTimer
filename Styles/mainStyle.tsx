import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  topHalf: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  leftArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    transform:[{ rotate: "-90deg" }]
  },
  rightArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    transform:[{ rotate: "90deg" }]
  },
  middleArea:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
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
  }
});
