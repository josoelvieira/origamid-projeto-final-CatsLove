import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm("number");
    const idade = useForm("number");
    const [img, setImg] = useState({});
    const { data, erro, loading, request } = useFetch();
    const navigate = useNavigate();
    useEffect(() => {
        if (data) navigate("/conta");
    }, [data, navigate]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.value);
        formData.append("peso", peso.value);
        formData.append("idade", idade.value);

        const token = window.localStorage.getItem("token");
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }
    function handleImgchange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CatsLove | Postar foto</title>
            </Helmet>
            <section className={`${styles.photoPost} animeLeft`}>
                <form onSubmit={handleSubmit}>
                    <Input label="Nome" type="text" name="nome" {...nome} />
                    <Input label="Peso" type="number" name="peso" {...peso} />
                    <Input
                        label="Idade"
                        type="number"
                        name="idade"
                        {...idade}
                    />
                    <input
                        className={styles.file}
                        type="file"
                        name="img"
                        id="img"
                        onChange={handleImgchange}
                    />
                    {loading ? (
                        <Button disabled>Enviando...</Button>
                    ) : (
                        <Button>Enviar</Button>
                    )}
                    <Error error={erro} />
                </form>
                <div>
                    {img.preview && (
                        <div
                            className={styles.preview}
                            style={{ backgroundImage: `url('${img.preview}')` }}
                        ></div>
                    )}
                </div>
            </section>
        </>
    );
};

export default UserPhotoPost;
