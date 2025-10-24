import robotImage from '../assets/robot.png';
import userImage from '../assets/user.png';
import './ChatMessage.css'

export function ChatMessage({message, sender}){ //destructuring assignment
   return(
      <div className={sender==='user'?'chat-message-user':'chat-message-robot'}>
          {sender==='robot' && <img src={robotImage} className="chat-message-profile" />}
          <div className="chat-message-text">{message}</div>
      { sender ==='user' && <img src={userImage}  className="chat-message-profile" />}
      </div>
  );
}