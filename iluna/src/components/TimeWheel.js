import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
  Modal,
} from 'react-native';
import styled from 'styled-components/native';
import {
  WheelPicker,
  TimePicker,
  DatePicker,
} from 'react-native-wheel-picker-android';
import moment from 'moment';

const TimeWheel = ({height, width, updateTime, initTime}) => {
  let d = new Date();

  if (initTime != '') {
    let [hours, minutes, seconds] = initTime.split(':');

    d.setHours(+hours);
    d.setMinutes(minutes);
    d.setSeconds(seconds);
  }

  const [time, setTime] = useState(d);
  //   console.log('initTime????????', d.toString());

  //   const [timeText, setTimeText] = useState('');
  const timeToText = value => {
    let tmpText = moment(value).format('HH:mm:00') + '';
    // setTimeText(tmpText);
    return tmpText;
  };

  const minArr = [];
  for (let i = 0; i < 60; i++) {
    if (i >= 0 && i < 10) {
      minArr.push('0' + i);
    } else {
      minArr.push(i + '');
    }
  }

  const hourArr = [];
  for (let i = 1; i <= 12; i++) {
    hourArr.push(i + '');
  }

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TimePicker
        initDate={time}
        hours={hourArr}
        minutes={minArr}
        onTimeSelected={time => {
          setTime(time);
          //   timeToText(time);
          updateTime(timeToText(time));
          //   console.log('setting time', time);
        }}
        style={{height: height * 0.3, width: width * 0.25}}
        itemTextSize={25}
        selectedItemTextSize={30}
        selectedItemTextColor={'#333333'}
        itemTextColor={'#bbbbbb'}
        hideIndicator
      />
      {/* <Text>{timeText}</Text> */}
    </View>
  );
};

export default TimeWheel;
