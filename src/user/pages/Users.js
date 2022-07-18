import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Reebal Akram',
      image:
        'https://pbs.twimg.com/profile_images/1298294488364965893/Gqc62c5F_400x400.jpg',
      places: 3,
    },
    {
      id: 'u2',
      name: 'Reebal Akram',
      image:
        'https://pbs.twimg.com/profile_images/1298294488364965893/Gqc62c5F_400x400.jpg',
      places: 2,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
