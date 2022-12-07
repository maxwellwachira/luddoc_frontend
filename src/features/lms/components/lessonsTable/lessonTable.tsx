import { Group, Table } from "@mantine/core";

import { DeleteButton, EditButton, MoreButton } from '../actionButtons';

interface LessonData {
   data: {
    id: string;
    count: number;
    lessonTitle: string;
   }[]
};

const LessonsTable = ({data}: LessonData) => {
    const rows =  data.map((element)=> (
        <tr key={element.lessonTitle}>
            <td>{element.count}</td>
            <td>{element.lessonTitle}</td>
            <td>
                <Group>
                    <EditButton id={element.id} type="lesson" />
                    <MoreButton id={element.id} type="lesson" />
                    <DeleteButton id={element.id} type="lesson" />
                </Group>
            </td>
        </tr>
    ))
    return (
        <Table  striped highlightOnHover captionSide="bottom" mt={20}>
            <caption>Luddoc Lessons</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Lesson Title</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>

    );
}

export default LessonsTable;