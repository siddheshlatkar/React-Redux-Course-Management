import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateCourse from "./CreateCourse";
import TextField from "@material-ui/core/TextField/TextField";
import InputBase from '@material-ui/core/InputBase';
import {fade} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 5,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge={"start"} className={classes.menuButton} color="inherit" aria-label={"menu"}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>
                        Course Manager
                    </Typography>
                    <CreateCourse/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
