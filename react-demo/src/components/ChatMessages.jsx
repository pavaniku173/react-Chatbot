import {useEffect,useRef } from 'react';
import {ChatMessage} from './ChatMessage.jsx';
import './ChatMessages.css';

export function ChatMessages({chatMessages}){
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