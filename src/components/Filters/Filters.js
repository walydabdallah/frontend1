/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import Menu from '@material-ui/core/Menu';
import Button from "components/CustomButtons/Button.js";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
import { drop_down } from "../../assets/constants/Drop"
export default function HeaderLinks(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event, val) => {
        setAnchorEl(null);
        props.filterBy(val)
    };
    return (
        <List className={classes.list} style={{ background: "black" }}>
            <ListItem className={classes.listItem}>
                <Button
                    onClick={handleClick}
                    color="transparent"
                    className={classes.navLink}
                >
                    Filter <ArrowDropDownIcon className={classes.icons} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuList>
                        {drop_down.map(val => (
                            <MenuItem onClick={(event) => handleClose(event, val)}>{val}</MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    className={classes.navLink}
                >
                    <SearchIcon className={classes.icons} /> Search
        </Button>
            </ListItem>
        </List>
    );
}
