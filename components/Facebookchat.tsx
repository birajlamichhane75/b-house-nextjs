"use client"
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class Facebookchat extends Component {
  render() {
    return (
      <FacebookProvider appId="1508613460011687" chatSupport>
        <CustomChat pageId="108160532107160" minimized={true}/>
      </FacebookProvider>    
    );
  }
}