import { useState,useEffect,useRef } from 'react'
import {Chatbot} from 'supersimpledev'

import './App.css'

function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText]=useState('');
  
  function saveInputText(event){
      //console.log(event.target.value);
      setInputText(event.target.value);

  }
  async function sendMessage(){
      setInputText(''); //clear input box immediately after clicking send button
      
      const newChatMessages= [
          ...chatMessages,
          {
              //message: 'how to use hooks?',
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
          }
      ];


      setChatMessages(newChatMessages);
setChatMessages([
...newChatMessages,
// This creates a temporary Loading... message.
// Because we don't save this message in newChatMessages,
// it will be remove later, when we add the response.
{
message: 'Loading...',
sender: 'robot',
id: crypto.randomUUID()
}
]);
      //console.log(inputText);
      //setChatMessages(newChatMessages);
      //const response = Chatbot.getResponse(inputText);
     const response= await Chatbot.getResponseAsync(inputText);
     //console.log(response);
     setChatMessages([
          ...newChatMessages,
          {
              //message: 'how to use hooks?',
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
          }
      ]);
          setInputText('');
  }
  function pressKey(event){
      if(event.key==='Enter'){
          sendMessage();
      }else if(event.key==='Escape'){
          setInputText('');
      }

  }
  return(
      <div className="chat-input-container">
      <input placeholder="send a message to chatbot" 
      size="30" onChange={saveInputText} 
      value={inputText}
      onKeyDown={pressKey} className="chat-input"/>
  
      <button onClick={sendMessage} className="send-button">Send</button>
      </div>
  )
}

function ChatMessage({message, sender}){ //destructuring assignment
   return(
      <div className={sender==='user'?'chat-message-user':'chat-message-robot'}>
          {sender==='robot' && <img src="robot.png" className="chat-message-profile" />}
          <div className="chat-message-text">{message}</div>
      { sender ==='user' && <img src="user.png"  className="chat-message-profile" />}
      </div>
  );
}
function ChatMessages({chatMessages}){
const chatMessagesRef= useRef(null);
useEffect(()=>{
  const containerElem= chatMessagesRef.current;
  if(containerElem){
      containerElem.scrollTop= containerElem.scrollHeight;
  }
  //console.log('ChatMessages component loaded');
},[chatMessages]);

  return(
  <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage)=>{      //generate the UI/html
          return (
              <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
              />
          );
      })}
  </div>
);
}

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
