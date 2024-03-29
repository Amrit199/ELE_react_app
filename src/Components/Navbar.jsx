import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { QuestionAnswer } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  }
}))

export const Navbar = () => {
  const classes = useStyles()
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, path: "/" },
          {
            text: "Compare Plans",
            icon: <FeaturedPlayListIcon />,
            path: "/features",
          },
          {
            text: "Energy Usage",
            icon: <MiscellaneousServicesIcon />,
            path: "/services",
          },
          { text: "News", icon: <ListAltIcon />, path: "/listed" },
          { text: "FAQ", icon: <QuestionAnswer />, path: "/faq" },
          { text: "Contact", icon: <ContactsIcon />, path: "/contact" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Link to={"/"}>
            <NavbarLogo src={logoImg} alt="logo"/>
          </Link>
        </Box>

        <NavbarLinksBox>
          <Link to={"/"} className={classes.link}>
            <NavLink>Home</NavLink>
          </Link>
          <Link to={"/features"} className={classes.link}>
            <NavLink variant="body2">Compare Plans</NavLink>
          </Link>
          <Link to={"/services"} className={classes.link}>
            <NavLink variant="body2">Energy Usage</NavLink>
          </Link>
          <Link to={"/faq"} className={classes.link}>
            <NavLink variant="body2">FAQ</NavLink>
          </Link>
          <Link to={"/listed"} className={classes.link}>
            <NavLink variant="body2">News</NavLink>
          </Link>
          <Link to={"/contact"} className={classes.link}>
            <NavLink variant="body2">Contact</NavLink>
          </Link>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Link to={"/login"}>
          <NavLink variant="body2">Log In</NavLink>
        </Link>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
