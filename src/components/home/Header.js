import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateCourse from "./CreateCourse";
import {fade} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import PropTypes from "prop-types";


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

const Header = ({saveCourse, gridLayout, alterLayout}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge={"start"} className={classes.menuButton} color="inherit" aria-label={"menu"} onClick={alterLayout}>
                        {gridLayout ? <MenuIcon/> : <AppsIcon/>}
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>
                        Course Manager
                    </Typography>
                    <CreateCourse saveCourse={saveCourse}/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    saveCourse: PropTypes.func.isRequired,
    gridLayout: PropTypes.bool.isRequired,
    alterLayout: PropTypes.func.isRequired,
};

export default Header;
