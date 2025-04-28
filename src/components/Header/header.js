import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, useTheme, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/I-Pro logo with white BG (1).png';
import './header.css';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const location = useLocation();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            className={`app-bar ${isMobile ? 'mobile' : ''}`} // Corrected template literal
            sx={{ backgroundColor: isMobile ? '#097ABF' : 'transparent', boxShadow: 'none' }}
        >
            <Toolbar className="toolbar">
                {/* Logo Section */}
                <img src={logo} alt="Logo" style={{ width: '160px', height: '40px', marginRight: '16px' }} />

                {/* Menu items */}
                <div className="menu-items">
                    {isMobile ? (
                        <>
                            <IconButton color="inherit" onClick={handleMenuClick} className="hamburger-icon">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                {location.pathname !== "/" && (
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/" className="menu-link">Home</Link>
                                    </MenuItem>
                                )}
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to="/about-us" className="menu-link">About Us</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to="#" className="menu-link">Products</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to="/our-services" className="menu-link">Services</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to="#" className="menu-link">Claims</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to="#" className="menu-link">Careers</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to="/contact-us" className="menu-link">Contact Us</Link>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            {location.pathname !== "/" && (
                                <Button color="inherit">
                                    <Link to="/" className="nav-link">Home</Link>
                                </Button>
                            )}
                            <Button color="inherit">
                                    <Link to="/Aboutus" className="nav-link">About Us</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="#" className="nav-link">Products</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/our-services" className="nav-link">Services</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="#" className="nav-link">Claims</Link>
                            </Button>
                            <Button color="inherit">
                                    <Link to="/career" className="nav-link">Careers</Link>
                            </Button>
                            <Button color="inherit">
                                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                            </Button>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
