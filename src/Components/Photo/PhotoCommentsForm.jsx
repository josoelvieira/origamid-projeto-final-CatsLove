import React, { useState } from 'react'
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch';

const PhotoCommentsForm = ({id}) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()


  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    await request (url, options)
  }

  return (
    <div>
      <form action="">
        <textarea
        id="comment"
        name="comment"
        placeholder='Comente...'
        value={comment}
        onChange={({target}) => setComment(target.value)}/>
        <button><Enviar/></button>
      </form>
    </div>
  )
}

export default PhotoCommentsForm