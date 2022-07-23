import { useContext } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from '../Helper/Error'

const LoginCriar = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm();

    const { userLogin } = useContext(UserContext);
    const { loading, error, request } = useFetch();

    async function handleSumit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok) userLogin(username.value, password.value);
        console.log(response);
    }
    return (
        <section className="animeLeft">
            <h1 className="title"> Cadastre-se</h1>
            <form onSubmit={handleSumit}>
                <Input
                    label="Nome"
                    id="nome"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input
                    label="E-mail"
                    id="email"
                    type="email"
                    name="email"
                    {...email}
                />
                <Input
                    label="Senha"
                    id="senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Cadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}
                <Error error={error}/>
            </form>
        </section>
    );
};

export default LoginCriar;
