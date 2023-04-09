<<<<<<< HEAD
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import logo from "../../../public/assets/images/logo-white.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavListDrawe from "../NavListDrawer";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/index";
import { NavLink } from "react-router-dom";
import SearchInput from "../SearchInput";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button>
            <NavLink to={"/"}>
              <img src={logo} className="logo" style={{ width: "150px" }} />
            </NavLink>
          </Button>
          {/* --- VISTA MOBILE ---  */}
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* --- VISTA DESKTOP ---- */}

          {/* --- MENU IZQUIERDO --- */}
          <Box
            sx={{ display: { xs: "none", sm: "block" }, ml: 3, flexGrow: 1 }}
          >
            <Button
              color="base"
              id="basic-button"
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              NUESTROS HELADOS
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/Conos"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CONOS
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/Vasos"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  VASOS
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/Paletas"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  PALETAS
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/products"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  VER TODO
                </NavLink>
              </MenuItem>
            </Menu>
            <NavLink style={{ textDecoration: "none", color: "white" }}>
              <Button color="base" sx={{ fontWeight: 200 }}>
                RESERVAS
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none", color: "white" }}>
              <Button color="base" sx={{ fontWeight: 200 }}>
                SUCURSALES
              </Button>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Button color="base" sx={{ fontWeight: 200 }}>
                NOSOTROS
              </Button>
            </NavLink>
          </Box>

          {/* --- MENU DERECHO --- */}

          <SearchInput />
          <CartWidget />
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", sm: "none" } }}
      >
        <NavListDrawe setOpen={setOpen} />
      </Drawer>
    </>
  );
}
=======
import { CartWidget } from '../CartWidget';

export const Navbar = () => {
  return (
    <nav className="navbarDisplay">
      {/* LOGO */}
          <div>
              <img src={imagenes[2]}/>
          </div>
      <ul className="ulDisplay">
        <li className="liDisplay">Helados de Vaso</li>
        <li className="liDisplay">Helados en conos</li>
        <li className="liDisplay">Helados Familiares</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
>>>>>>> 581330815b6ad0306f6bd40700fa542065e9289a
