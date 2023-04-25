import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <Fragment>
      <div>
        <Link className='logo' to='/'>
          <h1>Logo</h1>
        </Link>
        <div className='links'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;