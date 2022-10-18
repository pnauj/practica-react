import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Contenedor>
        <div className="caja my-5">
          <form action="">
            <h4>Ingrese su usuario</h4>
            <hr />
            <div>
              <label htmlFor="usuario">Usuario</label>
              <input type="text" placeholder="usuario" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Ingrese su contraseña" />
            </div>

            <button type="submit" btn btn-primary>
              Enviar
            </button>
          </form>
        </div>
      </Contenedor>
    </>
  );
};

export default Login;

const Contenedor = styled.section`
  width: 500px;
  height: 100px;
  justify-content: center;
  align-items: center;
  top: 300px;
`;
