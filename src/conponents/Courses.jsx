import { useEffect } from "react";
import { useState } from "react";
import Cours from "./Cours";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className="md:w-3/4 p-3 md:grid grid-cols-3 gap-2">
                {/* <h2>Courses {courses.length}</h2> */}
                {
                    courses.map(courses => <Cours 
                        key={courses.id}
                        cours={courses}
                    ></Cours>)
                }
        </div>
    );
};

export default Courses;