import React from 'react';
import styled from 'styled-components'


const Footer = () => {
  return (
    <>
      <Contenedor className='mt-5 bg-dark text-secondary '>
        <div className='text-center fw-bold'>
          <p>Todos los Derechos Reservados</p>
        </div>
      </Contenedor>
      
    </>
  );
};

export default Footer;

const Contenedor = styled.section`
  background: #000;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  

`;
