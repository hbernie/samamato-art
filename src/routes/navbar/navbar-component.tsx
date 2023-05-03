import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/fake-logo.png';
import './navbar.scss';

const Navbar = (): JSX.Element => {
    return (
        <Fragment>
            <div className="navbar">
                <Link className="logo" to="/">
                    <img src={logo} />
                </Link>
                <div className="links">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
