import React from 'react';
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/default.png"
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType> {

  constructor(props: UsersPropsType) {
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
          </div>
          <div>
            {u.subscribe
              ? <button onClick={() => {
                this.props.unsubscribe(u.id)
              }}>Unsubscribe</button>
              : <button onClick={() => {
                this.props.subscribe(u.id)
              }}>Subscribe</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
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
  }
}

export default Users;