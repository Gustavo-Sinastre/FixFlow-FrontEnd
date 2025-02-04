import React, { useEffect, useState } from "react";


const HomePage: React.FC = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setIsAuthenticated(true); // Se o token existir, o usuário está autenticado
          }
        }, []);

    return (
        <div>
        {isAuthenticated ? (
          <h1>Bem-vindo, você está autenticado!</h1>
        ) : (
          <h1>Por favor, faça login para acessar</h1>
        )}
      </div>
    );
};

export default HomePage;