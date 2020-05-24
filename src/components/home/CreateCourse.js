import React, {useState} from "react";
import InputBase from "@material-ui/core/InputBase/InputBase";
import Button from "@material-ui/core/Button";
import {fade, makeStyles} from '@material-ui/core/styles';

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
        textAlign: "center",
        '& input': {
            // textAlign: "center"
            marginLeft: 10,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }
}));

const CreateCourse = ({saveCourse}) => {
    const [courseName, setCourseName] = useState("");

    const handleChange = (e) => {
            setCourseName(e.target.value);
    };

    const onSubmitCourse = (e) => {
        const newCourse = {
            courseName: courseName.length > 0 ? courseName : "Course A",
            ownedBy:"Me",
            createdAt: new Date().toUTCString()
        };
        saveCourse(newCourse);
        setCourseName("");
    };

    const classes = useStyles();
    return (
        <>
            <InputBase className={classes.search}
                       placeholder="New Course Title"
                       onChange={handleChange}
                       classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                       }}
                       inputProps={{'aria-label': 'search'}}
            />
            <Button onClick={onSubmitCourse} color="inherit">ADD</Button>
        </>
    );
};

export default CreateCourse;
