import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
//icon
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DashboardCard from "../components/DashboardCard";
//img
import img1 from "../asset/images/amazon.jpg";
import img2 from "../asset/images/argos.jpg";
import img3 from "../asset/images/happy.jpg";

const drawerWidth = 240;
const data = [
  { img: img1, title: "Amazon", icon: AcUnitIcon },
  { img: img2, title: "Argos", icon: CameraAltIcon },
  { img: img3, title: "Happy", icon: FastfoodIcon },
  { img: img1, title: "Amazon", icon: AcUnitIcon },
  { img: img2, title: "Argos", icon: CameraAltIcon },
  { img: img3, title: "Happy", icon: FastfoodIcon },
  { img: img1, title: "Amazon", icon: AcUnitIcon },
  { img: img2, title: "Argos", icon: CameraAltIcon },
  { img: img3, title: "Happy", icon: FastfoodIcon },
];
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let naviagte = useNavigate();
  const goToPage = (link) => {
    const linkTo = link.toLowerCase();
    naviagte(`/${linkTo}`);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {data?.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{<item.icon />}</ListItemIcon>
            <ListItemText
              primary={item.title}
              onClick={() => goToPage(item.title)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Top 10 Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container spacing={5}>
          {data?.map(({ img, title }, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <DashboardCard
                img={img}
                title={title}
                onClick={() => goToPage(title)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
