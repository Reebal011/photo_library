import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../component/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Badshai Mosque',
    description:
      "'The Royal Mosque') is a Mughal-era congregational mosque in Lahore, capital of the Pakistani province of Punjab, Pakistan",
    imageUrl:
      'https://www.architecturecourses.org/sites/default/files/field/image/badshahi_mosque_1.png',
    address: 'Lahore, Pakistan',
    coordinates: {
      lat: 31.588075,
      lng: 74.310125,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Badshai Mosque II',
    description:
      "'The Royal Mosque') is a Mughal-era congregational mosque in Lahore, capital of the Pakistani province of Punjab, Pakistan",
    imageUrl:
      'https://www.architecturecourses.org/sites/default/files/field/image/badshahi_mosque_1.png',
    address: 'Lahore, Pakistan',
    coordinates: {
      lat: 31.588075,
      lng: 74.310125,
    },
    creator: 'u2',
  },
]
const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  return <PlaceList items={loadedPlaces}></PlaceList>
}

export default UserPlaces
