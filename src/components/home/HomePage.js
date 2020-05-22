import React, {useState} from "react";
import Header from "./Header";
import CourseGrid from "../layout/CourseGrid";
import CourseTable from "../layout/CourseTable";

const HomePage = () => {
    const [gridLayout, setGridLayout] = useState(true);

    const alterLayout = () => {
        setGridLayout(!gridLayout);
    };

    return (
        <div>
            <Header gridLayout={gridLayout} alterLayout={alterLayout} />
            {gridLayout ? <CourseGrid /> : <CourseTable/>}
        </div>
    );
};

export default HomePage;
