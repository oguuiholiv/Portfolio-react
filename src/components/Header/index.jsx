import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background: rgba(18, 18, 18, 0.45);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 0.5px 4px #eaf207;
  position: fixed;

  .logo {
    width: 50%;
    opacity: 0;
  }

  .menu {
    width: 50%;
  }

  .menu-items {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 90%;
    flex-wrap: wrap;
  }

  .menu-items li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Baumans", cursive;
    font-size: 1.2rem;
    color: #f2f2f2;
  }
  .menu-items li a {
    text-decoration: none;
    color: #f2f2f2;
    transition: ease-in-out 0.3s;
  }
`;

export const Header = () => {
  return (
    <>
      <Container>
        <div class="logo">
          <p>Guih</p>
        </div>

        {/* <!-- Inicio da navbar --> */}
        <div class="menu">
          <ul class="menu-items">
            <li>
              <a href="">INICIO</a>
            </li>
            <li>
              <a href="">SOBRE MIM</a>
            </li>
            <li>
              <a href="">PROJETOS</a>
            </li>
            <li>
              <a href="">HABILIDADES</a>
            </li>
          </ul>
        </div>
        {/* <!-- Fim da navbar --> */}
      </Container>
    </>
  );
};
