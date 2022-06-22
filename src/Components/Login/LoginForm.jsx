import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    function handleSubmit(event) { 
      event.preventDefault();
      fetch('https:dosapi.origamid.dev/json/jwt-auth/v1/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                   {...username}
                />
                <input
                    type="password"
                    {...password}
                    
                />
                <button>Entrar</button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};

export default LoginForm;
