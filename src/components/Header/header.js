import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
    Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-ipro.jpeg';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();

    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const [whatWeDoAnchor, setWhatWeDoAnchor] = React.useState(null);
    const [aboutUsAnchor, setAboutUsAnchor] = React.useState(null);
    const [productsAnchor, setProductsAnchor] = React.useState(null);
    const [partnersAnchor, setPartnersAnchor] = React.useState(null);

    const handleOpen = setter => event => setter(event.currentTarget);
    const handleClose = setter => () => setter(null);
    
    const navigate = useNavigate();

    // 🔧 Dropdown menu style
    const menuPaperProps = {
        sx: {
            maxHeight: 'unset',
            overflow: 'visible',
            minWidth: 200,
            paddingY: 0,
            paddingX: 0,
        }
    };

    return (
        <AppBar
            position="sticky"
            className={`app-bar ${isMobile ? 'mobile' : ''}`}
            sx={{ backgroundColor: isMobile ? 'blue' : 'transparent', boxShadow: 'none' }}
        >
            <Toolbar className="toolbar">
                <img
                    src={logo}
                    className="header-logo"
                    alt="Logo"
                    style={{
                        width: '160px',      // fixed width
                        height: '60px',      // fixed height to look good
                        objectFit: 'contain', // ensures image scales properly
                        marginRight: '16px'
                    }}
                />

                <div className="menu-items">
                    {isMobile ? (
                        <>
                            <IconButton color="inherit" onClick={handleOpen(setMenuAnchor)} className="hamburger-icon">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={menuAnchor}
                                open={Boolean(menuAnchor)}
                                onClose={handleClose(setMenuAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                PaperProps={menuPaperProps}
                            >
                                {location.pathname !== "/" && (
                                    <MenuItem onClick={() => { handleClose(setMenuAnchor)(); navigate("/"); }}>
                                        <span className="menu-link">Home</span>
                                    </MenuItem>
                                )}
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/our-services" className="menu-link">Our Services</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/why-ipro-infinty" className="menu-link">Why I-Pro Infinity</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/Aboutus" className="menu-link">About Us</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/beliefs-section" className="menu-link">Our Beliefs</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/healthinsurance" className="menu-link">Health Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/4-wheeler" className="menu-link">Private Car Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/2-wheeler" className="menu-link">Two-Wheeler Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/commercial-insurance" className="menu-link">Commercial Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/corporate" className="menu-link">Corporate Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/travelinsurance" className="menu-link">Travel Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/Lifeinsurance" className="menu-link">Life Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/Homeisnurance" className="menu-link">Home Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}><Link to="/career" className="menu-link">Careers</Link></MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <a href="https://web.iproinfinity.com/pos/" className="menu-link" target="_blank" rel="noopener noreferrer">Partner Registration</a>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <a href="https://web.iproinfinity.com/login.php" className="menu-link" target="_blank" rel="noopener noreferrer">Partner Login</a>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <a href="https://web.iproinfinity.com/customer-profile/" className="menu-link" target="_blank" rel="noopener noreferrer">Customer Login</a>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                                {/* Show Home in Desktop if not on home page */}
                                {location.pathname !== "/" && (
                                    <Button color="inherit" onClick={() => navigate("/")}>
                                        <span className="nav-link">HOME</span>
                                    </Button>
                                )}
                            {/* What We Do */}
                            <Button color="inherit" onClick={handleOpen(setWhatWeDoAnchor)}>
                                <span className="nav-link">WHAT WE DO</span>
                            </Button>
                                <Menu
                                    anchorEl={whatWeDoAnchor}
                                    open={Boolean(whatWeDoAnchor)}
                                    onClose={handleClose(setWhatWeDoAnchor)}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    PaperProps={{
                                        sx: {
                                            height: '100px',
                                            minWidth: 200,
                                            overflow: 'hidden',
                                            p: 0,
                                            boxShadow: 3,
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose(setWhatWeDoAnchor)}>
                                        <Link to="/our-services" className="menu-link">Our Services</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose(setWhatWeDoAnchor)}>
                                        <Link to="/why-ipro-infinty" className="menu-link">Why I-Pro Infinity</Link>
                                    </MenuItem>
                                </Menu>


                            {/* About Us */}
                            <Button color="inherit" onClick={handleOpen(setAboutUsAnchor)}>
                                <span className="nav-link">ABOUT US</span>
                            </Button>
                                <Menu
                                    anchorEl={whatWeDoAnchor}
                                    open={Boolean(whatWeDoAnchor)}
                                    onClose={handleClose(setWhatWeDoAnchor)}
                                    getContentAnchorEl={null}  // ⬅ Stop auto vertical adjustment
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    PaperProps={{
                                        sx: {
                                            minWidth: 200,
                                            overflow: 'visible',
                                            p: 0,
                                            boxShadow: 3,
                                        },
                                    }}
                                >

                                    <MenuItem onClick={handleClose(setAboutUsAnchor)}>
                                        <Link to="/Aboutus" className="menu-link">About Us</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose(setAboutUsAnchor)}>
                                        <Link to="/beliefs-section" className="menu-link">Our Beliefs</Link>
                                    </MenuItem>
                                </Menu>


                            {/* Products */}
                            <Button color="inherit" onClick={handleOpen(setProductsAnchor)}>
                                <span className="nav-link">PRODUCTS</span>
                            </Button>
                            <Menu
                                anchorEl={productsAnchor}
                                open={Boolean(productsAnchor)}
                                onClose={handleClose(setProductsAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={menuPaperProps}
                            >
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/healthinsurance" className="menu-link">Health Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/4-wheeler" className="menu-link">Private Car Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/2-wheeler" className="menu-link">Two-Wheeler Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/commercial-insurance" className="menu-link">Commercial Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/corporate" className="menu-link">Corporate Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/travelinsurance" className="menu-link">Travel Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/Lifeinsurance" className="menu-link">Life Insurance</Link></MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}><Link to="/Homeisnurance" className="menu-link">Home Insurance</Link></MenuItem>
                            </Menu>

                            {/* Careers */}
                            <Button color="inherit"><Link to="/career" className="nav-link">CAREERS</Link></Button>

                            {/* Partners */}
                            <Button color="inherit" onClick={handleOpen(setPartnersAnchor)}>
                                <span className="nav-link">PARTNERS</span>
                            </Button>
                            <Menu
                                anchorEl={partnersAnchor}
                                open={Boolean(partnersAnchor)}
                                onClose={handleClose(setPartnersAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    PaperProps={{
                                        sx: {
                                            height: '130px',
                                            minWidth: 200,
                                            overflow: 'hidden',
                                            p: 0,
                                            boxShadow: 3,
                                        },
                                    }}
                            >
                                <MenuItem onClick={handleClose(setPartnersAnchor)}>
                                        <a href="https://web.iproinfinity.com/pos/" className="menu-link" target="_blank" rel="noopener noreferrer">Partner Registration</a>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setPartnersAnchor)}>
                                        <a href="https://web.iproinfinity.com/login.php" className="menu-link" target="_blank" rel="noopener noreferrer">Partner Login</a>
                                </MenuItem>
                                    <MenuItem onClick={handleClose(setPartnersAnchor)}>
                                        <a href="https://web.iproinfinity.com/customer-profile/" className="menu-link" target="_blank" rel="noopener noreferrer">Customer Login</a>
                                    </MenuItem>
                            </Menu>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
