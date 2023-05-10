import React from 'react';
import s from "./users.module.css"
import userPhoto from "../../assets/images/default.png"
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  subscribe: (userId: number) => void
  unsubscribe: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
}

export function Users(props: UsersPropsType) {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(page => {
        return <span onClick={() => props.onPageChanged(page)}
                     className={props.currentPage === page ? s.selectedPage : ""}>{page}</span>
      })}
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {u.subscribe
              ? <button onClick={() => {
                props.unsubscribe(u.id)
              }}>Unsubscribe</button>
              : <button onClick={() => {
                props.subscribe(u.id)
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

