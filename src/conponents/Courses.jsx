import { useEffect } from "react";
import { useState } from "react";
import Cours from "./Cours";
import PropTypes from 'prop-types';

const Courses = ({handelListingButton}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className="md:w-3/4 p-3 md:grid grid-cols-3 gap-2">
                {
                    courses.map(courses => <Cours 
                        key={courses.id}
                        cours={courses}
                        handelListingButton={handelListingButton}
                    ></Cours>)
                }
        </div>
    );
};
Courses.propTypes = {
    handelListingButton: PropTypes.func
}

export default Courses;