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
        height: 70,
        // width: 200,
    },
    paper: {
        height: 200,
        width: 200,
    },
    pos: {
        marginBottom: 12,
    },
    course_table: {
        alignItems: "baseline",
    }
}));

const CourseTable = ({courses, deleteCourse}) => {
    const classes = useStyles();

    const onDeleteClick = (course) => {
        deleteCourse(course);
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify-content={"flex-start"} spacing={2}>
                    {courses.map((course) => (
                        <Grid item key={course._id} xs={8}>
                            <Card className={classes.card}>
                                <Grid container className={classes.course_table} spacing={7}>
                                    <Grid item>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {course.courseName}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item>
                                        <CardContent>
                                            <Typography className={classes.pos} color="textSecondary">
                                                {course.ownedBy}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item>
                                        <CardContent>
                                            <Typography variant="body2" component="p">
                                                {course.createdAt}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item>
                                        <CardActions>
                                            <IconButton onClick={() => onDeleteClick(course)}>
                                                <CancelIcon style={{fill: "red"}}/>
                                            </IconButton>
                                        </CardActions>
                                    </Grid>
                                    <Grid item>
                                        <CardActions>
                                            <IconButton>
                                                <EditIcon style={{fill: "blue", marginLeft: "auto"}}/>
                                            </IconButton>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

CourseTable.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired,
};

export default CourseTable;
