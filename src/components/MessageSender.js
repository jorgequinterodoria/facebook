import React, {useState} from 'react'
import './../css/MessageSender.css'
import { Avatar, Button } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../StateProvider';
import firebase from 'firebase'
import db from '../firebase'
import SendIcon from '@material-ui/icons/Send'



function MessageSender() {

    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue()
    const[input, setInput] = useState('')
    const[imageUrl, setImageUrl] = useState('')
    

    const handleSubmit = (e) =>{
        e.preventDefault()

        // acciones en la base de datos
        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            image:imageUrl,
            profilePic:user.photoURL,
            username:user.displayName,
        }); 
        console.log('logrado')
        setInput("")
        setImageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        className="messageSender__input"
                        placeholder={`Qué estas pensando, ${user.displayName} ?`}
                        value={input}
                        onChange={e =>setInput(e.target.value)} 
                    />
                    <input  
                        placeholder="URL imagen (opcional)" 
                        value={imageUrl}
                        onChange={e=>setImageUrl(e.target.value)}
                    />
                    <Button onClick={handleSubmit} type="submit"><SendIcon style={{color:"#2e81f4"}}/> </Button>
                </form>

            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Video en Vivo</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Foto/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"yellow"}} />
                    <h3>Actividad</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender 
