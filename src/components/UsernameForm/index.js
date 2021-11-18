import React from "react";

export const UsernameForm = ({keyId}) =>{


return (
    <div>
    <label className="username" placeholder='Enter Username' htmlFor='username'>
        Username:
    </label>
    <input
        className='username'
        key={keyId}
        type='text'
        onMouseOver={(e) => (e.target.placeholder = "")}
        onMouseOut={(e) => (e.target.placeholder = "Enter a username...")}
        value={username}
        onChange={updateUsername}
        required
    />
    </div>
          )

}