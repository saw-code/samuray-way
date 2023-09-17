import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "api-key": "62d19d64-cb0c-4ed8-b41b-45e7b014617c"
  }
})

// baseURL подставится перед users?page
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
}

export const headerAPI = {
  getHeader() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}
