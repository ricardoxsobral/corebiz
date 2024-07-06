import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


import logo from '../../assets/site-logo-corebiz-preto-cinza.png'
import lupa from '../../assets/lupa.png'
import user from '../../assets/user.png'
import cartIcon from '../../assets/shopping-cart.png'


import './Navbar.css'


function NavbarWeb() {

  return (
    <>
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
    </>
  )
}

export default NavbarWeb
