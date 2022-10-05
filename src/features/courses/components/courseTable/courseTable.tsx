import { useRef } from "react";
import { Group, Table } from "@mantine/core";

import { DeleteButton, EditButton, MoreButton } from '../actionButtons';

interface CourseData {
   data: {
    courseName: string;
    totalLessons: number;
    numberOfEnrolledStudents: number
    pricing: string
   }[]
};

const CourseTable = ({data}: CourseData) => {
 
    let count = useRef(0);
    const rows =  data.map((element)=> (
        <tr key={element.courseName}>
            <td>{count.current = count.current + 1}</td>
            <td>{element.courseName}</td>
            <td>{element.totalLessons}</td>
            <td>{element.numberOfEnrolledStudents}</td>
            <td>{element.pricing}</td>
            <td>
                <Group>
                    <EditButton id={1} />
                    <MoreButton id={1} />
                    <DeleteButton id={1} />
                </Group>
            </td>
        </tr>
    ))
    return (
        <Table  striped highlightOnHover captionSide="bottom" mt={60}>
            <caption>Luddoc Courses</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Course Name</th>
                    <th>Total Lessons</th>
                    <th>Number of Enrolled Students</th>
                    <th>Pricing</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>

    );
}

export default CourseTable;