// src/pages/login/login.tsx
import axiosInstance from '../../api/axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authenticate';



export const LoginPage = () => {

    const [user, setUser] = useState<string>(""); // Estado para o usuário
    const [password, setPassword] = useState<string>(""); // Estado para a senha
    const [error, setError] = useState('');

    const authContext = useContext(AuthContext);

    if (!authContext) {
        return null;
    }

    const { login } = authContext;


    // Função para atualizar o estado do usuário
    const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    };

    // Função para atualizar o estado da senha
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // Função para tratar o envio do formulário
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Usuário:", user);
        console.log("Senha:", password);

        try {
            const response = await axiosInstance.post('/login', {
                user,
                password,
            });

            login(response.data.token);
            localStorage.setItem("token", response.data.token);
            setError('');
        } catch (err) {
            setError('Usuário ou senha incorreta!');
        }
    };

    return (
        <div>
            <strong>Olá feras do TypeScript</strong>

            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Usuário:
                    <input
                        type="text"
                        value={user}
                        onChange={handleUserChange}
                        placeholder="Digite seu usuário"
                        required
                    />
                </label>

                <label>
                    Senha:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Digite sua senha"
                        required
                    />
                </label>

                <button
                    type="submit"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
