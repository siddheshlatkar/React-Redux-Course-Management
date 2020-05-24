import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    card: {
        height: 200,
        width: 200,
    },
    paper: {
        height: 200,
        width: 200,
    },
    pos: {
        marginBottom: 12,
    },
}));

const CourseGrid = ({courses, deleteCourse}) => {

    const classes = useStyles();

    const onDeleteClick = (course) => {
        deleteCourse(course);
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify-content={"flex-start"} spacing={2}>
                    {courses.map((course) => (
                        <Grid item key={course._id}>
                            <Card className={classes.card} >
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {course.courseName}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        {course.ownedBy}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {course.createdAt}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton onClick={() => onDeleteClick(course)}>
                                        <CancelIcon style={{fill: "red"}} />
                                    </IconButton>
                                    <IconButton style={{marginLeft: "auto"}}>
                                        <EditIcon style={{fill: "blue"}}/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};


CourseGrid.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired,
};

export default CourseGrid;
