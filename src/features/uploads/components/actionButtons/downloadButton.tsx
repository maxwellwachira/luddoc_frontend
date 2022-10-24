import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import axios from "axios";
import { urls } from "../../../../constants/urls";

interface ID {
    id: string;
    type: string;
}

const DownloadButton = ({id, type}: ID) => {

    const onClick = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/upload/download/${id}`);
            const blob =  new Blob([data]);
           console.log(blob.type)
            const url = window.URL.createObjectURL(
                new Blob([data]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
            'download',
            ``,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode?.removeChild(link);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Button
                variant="outline"
                size="xs"
                radius="md"
                leftIcon={<IconDownload size={14}/>}
                onClick={onClick}
            >
                Download
            </Button>
        </>
    )
}
export default DownloadButton;