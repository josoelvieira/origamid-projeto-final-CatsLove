import React, { useState } from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { useRef } from 'react';
import { useEffect, useContext } from 'react';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext);
  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.sigle ? styles.photoSingle : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;