import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { WORKSHOPS } from "../constants/workshops";

export const useWorkshopHook = () => {
    const params = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [markdown, setMarkdown] = useState("");

    const loadWorkshop = () => {
        const workshop = WORKSHOPS.find(workshop => workshop.id === params.workshopId);
        if (workshop) {
            setTitle(workshop.name);
            setDescription(workshop.description);
            import(`/src/workshops/${params.workshopId}/README.md`)
                .then(res => {
                    fetch(res.default)
                        .then(async (res) => {
                            const content = await res.text();
                            setMarkdown(content);
                        })
                        .catch(err => console.log(err));
                })
        }
    }

    useEffect(() => {
        loadWorkshop();
    }, [])

    return {
        title,
        description,
        markdown
    }


}