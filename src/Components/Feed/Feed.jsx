import React from "react";
import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import { useEffect } from "react";

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [page, setPage] = useState([1, 2]);
    useEffect(() => {
        function infiniteScroll(event) {
            console.log(event);
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
