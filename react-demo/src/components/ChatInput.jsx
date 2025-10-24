import { useState} from 'react';
import {Chatbot} from 'supersimpledev';
import './ChatInput.css'


export function ChatInput({chatMessages, setChatMessages}){
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