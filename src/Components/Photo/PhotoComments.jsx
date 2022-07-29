import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'

const PhotoComments = (props) => {
  const login = useContext(UserContext)
  return (
    <div>
      {login && <PhotoCommentsForm id={props.id}/>}
    </div>
  )
}

export default PhotoComments