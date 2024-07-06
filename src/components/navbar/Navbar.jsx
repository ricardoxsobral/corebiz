import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';

import logo from '../../assets/site-logo-corebiz-preto-cinza.png';
import menuLogo from '../../assets/Icon.png';
import cartIcon from '../../assets/shopping-cart.png';
import lupa from '../../assets/lupa.png';
import user from '../../assets/user.png';

import './Navbar.css';

import useMedia from '../../hooks/CustomHokkie';

import { useState } from 'react';

function Navbar() {
  const isMobileDevice = useMedia('mobile');
  const isWebDevice = useMedia('web');

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {isMobileDevice ? (
        <div className='Navbar'>
          <Container>
            <div className="nav-row first-row">
              <div className="nav-item menu-icon">
                <img onClick={toggleDrawer(true)} src={menuLogo} alt="menu-icon" />
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  <div className="my-account">
                    <img src={user} alt="user-icon" />
                    <div>Minha Conta</div>
                  </div>
                </Drawer>
              </div>
              <div className="nav-item logo">
                <img src={logo} alt="logo-corebiz" />
              </div>
              <div className="nav-item cart">
                <img src={cartIcon} alt="cart-item" />
                <span>0</span>
              </div>
            </div>
            <div className="nav-row second-row">
              <div className="nav-item search">
                <TextField className='input-search' id="standard-basic" label="O que está procurando?" variant="standard" />
                <img src={lupa} alt="search-icon" />
              </div>
            </div>
          </Container>
        </div>
      ) : isWebDevice ? (
        <div className='NavbarWeb'>
          <Container maxWidth="lg">
            <div className="nav-row">
              <div className="nav-item logo">
                <img src={logo} alt="logo-corebiz" />
              </div>
              <div className="nav-item search">
                <TextField className='input-search' id="standard-basic" label="O que está procurando?" variant="standard" />
                <img src={lupa} alt="search-icon" />
              </div>
              <div className="nav-item user">
                <div className="my-account">
                  <img src={user} alt="user-icon" />
                  <div>Minha Conta</div>
                </div>
                <div className="cart">
                  <img src={cartIcon} alt="cart-item" />
                  <span>0</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
