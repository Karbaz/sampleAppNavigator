import React,{Component} from 'react'
import {
  View,
  Text
} from 'react-native'
import {storeTokenId,getTokenId} from './AsyncStorage'

export
const generateToken=(callback)=>{
  getTokenId((error,response)=>{
    if (!response) {
      var d = new Date().getTime();
      var randomToken =  'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      storeTokenId(randomToken,((e,r)=>{
        callback(null,true)
      }))
    }else{
      callback(null,true) 
    }
  })
}