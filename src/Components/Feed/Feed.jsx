import React from "react";
import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import { useEffect } from "react";

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [page, setPage] = useState([1]);
    useEffect(() => {
        function infiniteScroll(event) {
          const scroll = window.scrollY
          const height = document.body.offsetHeight - window.innerHeight
          if(scroll > height * 0.75) {
            console.log(true)
          }
          //setPage((page) => [...page, page.length + 1 ])
        }
        window.addEventListener("wheel", infiniteScroll);
        window.addEventListener("scroll", infiniteScroll);
        return () => {
            window.removeEventListener("wheel", infiniteScroll);
            window.removeEventListener("scroll", infiniteScroll);
        };
    }, []);
    return (
        <div>
            {modalPhoto && (
                <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            )}
            {page.map((page) => (
                <FeedPhotos
                    key={page}
                    user={user}
                    page={page}
                    setModalPhoto={setModalPhoto}
                />
            ))}
        </div>
    );
};

export default Feed;
