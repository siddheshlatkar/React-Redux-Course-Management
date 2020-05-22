import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

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

const CourseTable = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify-content={"flex-start"} spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                        <Grid item key={value} xs={8}>
                            <Card className={classes.card}>
                                <Grid container className={classes.course_table} spacing={7}>
                                    <Grid item>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                CS5200
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item>
                                        <CardContent>
                                            <Typography className={classes.pos} color="textSecondary">
                                                Me
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item>
                                        <CardContent>
                                            <Typography variant="body2" component="p">
                                                Thu, 21 May 2020 18:54:46 GMT
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item>
                                        <CardActions>
                                            <CancelIcon style={{fill: "red"}}/>
                                            {/*<EditIcon style={{fill: "blue", marginLeft: "auto"}}/>*/}
                                        </CardActions>
                                    </Grid>
                                    <Grid item>
                                        <CardActions>
                                            <EditIcon style={{fill: "blue", marginLeft: "auto"}}/>
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

export default CourseTable;
