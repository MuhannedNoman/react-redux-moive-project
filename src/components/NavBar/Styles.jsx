import styled from "styled-components";

  export const NavBarStyle = styled.div`
  .navbar {
    background: rgb(27, 26, 29);
    /* width: 100%;
    position: flex; Set the navbar to fixed position */
    height: 90px;
    margin-bottom: 0px;
    border-radius: 0px;
    /* top: 0; */
    display: flex;
  }
  .navbar-logo {
    /* justify-self: start; */
    img {
      width: 70px;
      
      @media screen and (max-width: 960px) {
        width: 100px;
      }
    }
    margin-left: 45px;
    cursor: pointer;
    /* text-decoration: none; */
    /* font-size: 4rem; */
  }
  .navbar-icon {
    /* cursor: pointer; */
    /* text-decoration: none; */
  }
  .nav-menu {
    display: flex;
    grid-template-columns: repeat(7, auto);
    grid-gap: 20px;
    list-style: none;
    text-align: center;
    width: 90vw;
    /* justify-content: space-around; */
  }

  .nav-item {
    color: white;
    font-size: 22px;
    margin: auto;
    /* padding: 10px; */
    /* display: flex; */
  }
  .nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    font-weight: bold;
    cursor: pointer;
    :hover {
      /* background-color: rgb(229, 229, 229, 0.4); */
      border-radius: 4px;
      padding: 10px;
      transition: all 0.3s ease-out;
      background-color: transparent;
      border: 2px solid #fcd430;
    }
    :focus {
      color: #fcd430;
    }
    &.login {
      /* font-size: 50px; */
      cursor: pointer;
      padding-left: 20px;
    }
  }

  .fa-bars {
    color: white;
    font-size: 40px;
    position: absolute;
    top: 25px;
    right: 10px;
  }
  .nav-links-mobile {
    display: none;
  }
  .menu-icon {
    display: none;
  }
  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      @media screen and (max-width: 576px) {
        height: 88vh;
      }
      height: 95vh;
      position: absolute;
      top: 89px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background: rgb(27, 26, 29);
      left: 0;
      transition: all 0.5s ease;
      z-index: 4;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
    .fa-times {
      color: white;
      font-size: 40px;
      position: absolute;
      top: 25px;
      right: 10px;
    }
    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }
    .nav-links-mobile:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }
  }
`;

export const DropdownStyle = styled.div`
background-color: lightgray;
width: 200px;
position: absolute;
border-radius: 10px;
transform: translate(-20%, 1%);

`;