import { useState} from 'react';
import {ChatInput} from './components/ChatInput';
import {ChatMessage} from './components/ChatMessage';
import {ChatMessages} from './components/ChatMessages';
import './App.css'


function App(){
  const [chatMessages, setChatMessages]= useState([
  {
      message: "hello chatbot",
      sender: "user",
      id:"id1"

  },
  {
      message: "Hello! How can I help you?",
      sender: "robot",
      id:"id2"
  },
  {
      message: "can you get me todays date",
      sender: "user",
      id:"id3"
  },
  {
      message: "Sure! Today's date is June 6, 2024.",
      sender: "robot",
      id:"id4"
  },
  {
      message: "how about coin flip?",
      sender: "user",
      id:"id5"
  },
  {
      message: "Sure! You got tails",
      sender: "robot",
      id:"id6"
  

}]);

  return (
  <div className="app-container">
      <ChatMessages  chatMessages={chatMessages}/>
      <ChatInput chatMessages={chatMessages}  setChatMessages={setChatMessages}/>

  </div>
  );
}


export default App
