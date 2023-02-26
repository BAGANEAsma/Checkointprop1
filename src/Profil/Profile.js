import React from 'react'


function Profile(props) {
  return (
    <div>
      {props.fullname}
      {props.Bio}
      {props.Profession}
<img src={props.children}></img>
<button onClick={()=>props.fct(props.fullname)}>Click</button>
    </div>
  )
}

export default Profile
