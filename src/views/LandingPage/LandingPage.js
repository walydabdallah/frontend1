import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Content from "./Sections/Content.js";

import { drop_down } from "../../assets/constants/Drop"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [filter, setFilter] = React.useState(drop_down[0])
  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <Header
        color="black"
        routes={dashboardRoutes}
        brand="Food n Wood"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container} style={{ 'width': '75%' }}>

          <img src={require("assets/img/Logo.png")} />
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="#"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Content filter={filter} />
        </div>
      </div>
    </div>
  );
}
