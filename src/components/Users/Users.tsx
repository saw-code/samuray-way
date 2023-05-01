import React from 'react';
import s from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/default.png"

const Users = (props: UsersPropsType) => {

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {props.setUsers(response.data.items)})
  }


  return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
          </div>
          <div>
            {u.subscribe
              ? <button onClick={() => {props.unsubscribe(u.id)}}>Unsubscribe</button>
              : <button onClick={() => {props.subscribe(u.id)}}>Subscribe</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
};

export default Users;