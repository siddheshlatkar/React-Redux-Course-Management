import React, {useEffect, useState} from "react";
import Header from "./Header";
import CourseGrid from "../layout/CourseGrid";
import CourseTable from "../layout/CourseTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import apiCallsInProgress from "../../redux/reducers/apiStatusReducer";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const HomePage = (props) => {
    const [gridLayout, setGridLayout] = useState(true);

    useEffect(() => {
        props.actions.loadCourses();
    },[])

    const alterLayout = () => {
        setGridLayout(!gridLayout);
    };

    return (
        <div>
            <Header gridLayout={gridLayout} alterLayout={alterLayout} />
            {props.apiCallsInProgress > 0 ? <LinearProgress /> : gridLayout ? <CourseGrid courses={props.courses}/> : <CourseTable courses={props.courses}/>}
            {/*{gridLayout ? <CourseGrid courses={props.courses}/> : <CourseTable courses={props.courses}/>}*/}
        </div>
    );
};

//<CircularProgress size={300} styles={{alignSelf: "center"}} />

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
        apiCallsInProgress: state.apiCallsInProgress,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
