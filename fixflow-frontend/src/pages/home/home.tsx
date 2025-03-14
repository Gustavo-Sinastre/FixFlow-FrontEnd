import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authenticate";
import { useNavigate } from "react-router-dom";


const HomePage: React.FC = () => {

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  if (!authContext) {
    return null;
  }
  const { isAuthenticated, logout } = authContext;

    return (
        <div>
        {isAuthenticated ? (
          <>
          <h1>Bem-vindo, Home!</h1>
          <button onClick={logout}>Sair</button>
          <button onClick={() => navigate("/register")}>Cadastro</button>
          </>
        ) : (
          <h1>Por favor, faça login para acessar</h1>
        )}
      </div>
    );
};

export default HomePage;