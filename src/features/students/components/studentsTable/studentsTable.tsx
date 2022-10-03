import { Group, Table } from "@mantine/core";

import { DeleteButton, EditButton, MoreButton } from '../actionButtons';

interface StudentData {
   data: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
   }[]
};

const StudentsTable = ({data}: StudentData) => {
 
    let count = 1;
    const rows =  data.map((element)=> (
        <tr key={element.phoneNumber}>
            <td>{count++}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.phoneNumber}</td>
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
            <caption>Luddoc Students</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>

    );
}

export default StudentsTable;