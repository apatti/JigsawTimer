import React, {useEffect, useState} from "react";
import {ImageBackground, StatusBar, View, Button, Text} from "react-native";
import {commonStyles} from "../Styles/mainStyle";

interface Props{

}
export const TimerTab: React.FC<Props> = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Timer</Text>
        </View>
      );
}