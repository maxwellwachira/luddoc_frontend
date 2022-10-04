import { useRef } from "react";
import { Group, Table } from "@mantine/core";

import { DeleteButton, EditButton, MoreButton } from '../actionButtons';

interface CategoryData {
   data: {
    categoryName: string;
    numberOfCourses: number;
   }[]
};

const CategoriesTable = ({data}: CategoryData) => {
 
    let count = useRef(0);
    const rows =  data.map((element)=> (
        <tr key={element.categoryName}>
            <td>{count.current = count.current + 1}</td>
            <td>{element.categoryName}</td>
            <td>{element.numberOfCourses}</td>
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
            <caption>Luddoc Categories</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th>Number of Courses</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>

    );
}

export default CategoriesTable;