/* eslint-disable no-unused-vars */
import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../StateProvider';
import db from './../../../firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [inputURL, setInputURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: inputURL
        })
    
        setInput('');
        setInputURL('');
      };
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInputURL(e.target.value)}
                    type="text"
                    className="messageSender_input"
                    placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                        type="text"
                        placeholder="Image Url (Optional)"
                        />
                        <button onClick={handleSubmit} type="submit">
                            Hidden Button
                        </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
