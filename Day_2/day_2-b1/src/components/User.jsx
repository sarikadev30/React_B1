import React from 'react'
// conditional rendering
export default function User(props) {
    if(props.login){
        return (
            <h1>Welcome , User</h1>
        )
    }
    else{
        return(
            <h1>Please Login</h1>
        )
    }
}
