import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authenticate";


const HomePage: React.FC = () => {
  
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { isAuthenticated, logout } = authContext;

    return (
        <div>
        {isAuthenticated ? (
          <>
          <h1>Bem-vindo, você está autenticado!</h1>
          <button onClick={logout}>Sair</button>
          </>
        ) : (
          <h1>Por favor, faça login para acessar</h1>
        )}
      </div>
    );
};

export default HomePage;