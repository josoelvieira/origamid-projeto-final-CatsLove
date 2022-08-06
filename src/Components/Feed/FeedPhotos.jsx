import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from './FeedPhoto.module.css'

const FeedPhotos = ({page, user, setModalPhoto}) => {
    const { data, loanding, error, request } = useFetch();
    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page, total: 3, user });
            const { json } = await request(url, options);
        }
        fetchPhotos();
    }, [request, user, page]);
    if (error) return <Error error={error} />;
    if (loanding) return <Loading />;
    if (data)
        return (
            <div>
                <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
                ))}
                </ul>
            </div>
        );
    else return null;
};

export default FeedPhotos;
