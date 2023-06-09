import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EcoIcon from "@material-ui/icons/Eco";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import CheckStat from "./CheckStat";

const NavBar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "black", zIndex: "1" }}
      >
        <Toolbar style={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{ justifySelf: "center", flexGrow: 1 }}
            variant="h7"
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <EcoIcon />
              HLeaf{" "}
              <sup>
                <small>v1.0</small>
              </sup>
            </Link>
          </Typography>
          <Link
            to={{
              pathname: "/newimage",
              state: {
                deleteSuccess: false,
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Test image">
              <IconButton
                component="span"
                style={{
                  color: "white",
                  float: "right",
                  backgroundColor: "#242424",
                }}
              >
                <CameraAltIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </Toolbar>
        <CheckStat />
      </AppBar>
    </div>
  );
};

export default NavBar;
