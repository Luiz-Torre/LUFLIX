// eslint-disable-next-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/logo_site.png';
import './Menu.css';
import Button from '../Button';

 function Menu() {
    return (
      <nav className = "Menu">
          <Link href="/">
            <img className="Logo" src={Logo} alt="LUFLIX logo" />
          </Link>

          <Button as={Link} className="ButtonLink" to="/cadastro/video">
             Novo vídeo
          </Button> 
      </nav>
    );
 }

 export default Menu; 