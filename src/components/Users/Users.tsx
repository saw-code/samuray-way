import React from 'react';
import s from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        subscribe: false,
        fullName: "DimOk",
        photoUrl: "https://webmg.ru/wp-content/uploads/2022/11/i-91-34.jpeg",
        status: "Im a hacker =)",
        location:
          {
            country: "Russia",
            city: "St.Petersburg"
          }
      },
      {
        id: 2,
        subscribe: true,
        fullName: "Vitalik",
        photoUrl: "https://webmg.ru/wp-content/uploads/2022/11/1628873975_116-p-foto-kotov-v-bandane-136.jpg",
        status: "Im an engineer",
        location:
          {
            country: "Russia",
            city: "Moscow"
          }
      },
      {
        id: 3,
        subscribe: false,
        fullName: "Kat",
        photoUrl: "https://webmg.ru/wp-content/uploads/2022/11/1614550123_3-p-memi-na-belom-fone-4-535x600.png",
        status: "Im a network engineer",
        location:
          {
            country: "Russia",
            city: "Rostov on Don"
          }
      }
    ])
  }


  return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={s.userPhoto}/>
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
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
};

export default Users;