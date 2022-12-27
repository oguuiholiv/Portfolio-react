import React from "react";
import styled from "styled-components";
import Bg from '../../assets/bgtexture.png'
export const Container = styled.div`
  
  

  .inicio {
    display: flex;
    width: 100%;
    height: 85vh;
    background: linear-gradient(rgba(20, 20, 20, 1), rgba(20, 20, 20, 1)),
      url(${Bg});
    background-blend-mode: overlay;
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    color: #f2f2f2;
    justify-content: center;
    margin-left: 6rem;
  }

  .content h1 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  .content h2 {
    font-family: "Monoton", cursive;
    text-transform: uppercase;
    font-size: 3rem;
    color: #515bd4;
  }
  .content span {
    margin-left: 8.8rem;
  }
  .content h3 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 1.4rem;
  }
`;

export const Inicio = () => {
  return (
    <>
      <Container>
        <div class="inicio">
          <div class="content">
            <h1 class="primary">Olá, eu sou</h1>
            <h2>
              Guilherme <br />
              <span>Oliveira</span>
            </h2>
            <h3>Desenvolvedor Front-End</h3>
          </div>
          <div class="logo-content"></div>
        </div>
      </Container>
    </>
  );
};
