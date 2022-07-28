import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loanding from "../Helper/Loanding";
import styles from './FeedPhoto.module.css'

const FeedPhotos = () => {
    const { data, loanding, error, request } = useFetch();
    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 12, user: 0 });
            const {  json } = await request(url, options);
            console.log(json);
        }
        fetchPhotos();
    }, [request]);
    if (error) return <Error error={error} />;
    if (loanding) return <Loanding />;
    if (data)
        return (
            <div>
                <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} />
                ))}
                </ul>
            </div>
        );
    else return null;
};

export default FeedPhotos;