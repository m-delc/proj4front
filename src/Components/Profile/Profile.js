import React, {useState} from "react";
import './Profile.css'

export default function Profile({ user }) {

    const { username, name } = user

    const [changeName, setChangeName] = useState('')
    const [changeUsername, setChangeUsername] = useState('')

    const onSubmit = () => {

    }

  return <div className="div1">
      <li>Name: {name}</li>
      <li>Username: {username}</li>
      <form onSubmit={onSubmit}>
            <input
                type="text"
                value={changeName}
                onChange={e => setChangeName(e.target.value)}
                name="name"
                placeholder="Change your name"
                />
            <input 
                type="text"
                value={changeUsername}
                onChange={e=> setChangeUsername(e.target.value)}
                name="username"
                placeholder="Change your Username"
                />      
            <button type="submit">Submit</button>
      </form>
  </div>;
}
