import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import avatar1 from "./assets/avatars/image-amyrobson.png"
import avatar2 from "./assets/avatars/image-juliusomo.png"
import avatar3 from "./assets/avatars/image-maxblagun.png"
import avatar4 from "./assets/avatars/image-ramsesmiron.png"
import iconPlus from "./assets/images/icon-plus.svg"
import iconMin from "./assets/images/icon-minus.svg"
import iconReply from "./assets/images/icon-reply.svg"



const CommentSection = () => {
  const [replies, setReplies] = useState([
    { id: 1, author: 'amyrobson', avatar: avatar1, time: '1 month ago', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam excepturi dolore amet velit, libero voluptatibus sunt minima doloribus eligendi deleniti harum laudantium ducimus fugit iste. Pariatur cum dolores aperiam!', likes: 12, replying: false },
    { id: 2, author: 'maxblagun', avatar: avatar2, time: '2 weeks ago', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam excepturi dolore amet velit, libero voluptatibus sunt minima doloribus eligendi deleniti harum laudantium ducimus fugit iste. Pariatur cum dolores aperiam!", likes: 5, replying: false },
    { id: 3, author: 'ramsesmiron', avatar: avatar3, time: '1 week ago', content: '@maxblagun If you\'re still new, I\'d recommend focusing on the fundamentals...', likes: 4, replying: false },
    { id: 4, author: 'juliosumo', avatar: avatar4, time: '2 days ago', content: '@ramsesmiron I couldn\'t agree more with this...', likes: 2, replying: false }
  ]);

  const [text,setText] = useLocalStorage("test","")

  // Función para manejar la respuesta
  const handleReply = (id) => {
    setReplies(replies.map(reply => 
      reply.id === id ? { ...reply, replying: !reply.replying } : reply
    ));
  };

  return (
    <div >
      {replies.map(reply => (
        <div key={reply.id}  >
          <div className="comment-section">
            <div className="comment">
              <div className="likes">
                <button className='likes-button'><img src={iconPlus} /></button>
                <span className='likes-cont'>{reply.likes}</span>
                <button className='likes-button'><img src={iconMin} /></button>
              </div>
              <div className="comment-avatar">
                <div className="comment-header">
                  <img src={reply.avatar} alt={`${reply.author}'s avatar`} className="avatar" />
                    <span className="author">{reply.author}</span>
                    <span className="time">{reply.time}</span>
                      <div className="comment-actions">
                        <button className="action-btn reply-btn" onClick={() => handleReply(reply.id)}>
                        <img src={iconReply} className='comment-reply'/>
                          Reply
                        </button>
                      </div>
                </div>
                <div className="comment-body">
                  <p>{reply.content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-comment">
            {reply.replying && (
              <div className="reply-form">
                <img src={reply.avatar} alt={`${reply.author}'s avatar`} className="comment-avatarIMG" />
                <div className='send-comment'>
                  <textarea 
                    onChange={e => setText(e.target.value)}
                    value={text} 
                    placeholder='hola'
                  />
                  <button className="send-btn">REPLY</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
