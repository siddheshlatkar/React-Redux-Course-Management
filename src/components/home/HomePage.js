import React from "react";
import Header from "./Header";
import CourseGrid from "../layout/CourseGrid";
import CourseTable from "../layout/CourseTable";

const HomePage = () => {
    return (
        <div>
            <Header/>
            {/*<CourseGrid/>*/}
            <CourseTable/>
        </div>
    );
};

export default HomePage;
