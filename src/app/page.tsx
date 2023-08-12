import APICheck from "./APICheck";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import PocketBase from "pocketbase";

export const metadata = {
    title: "Next notes",
    description: "bleeding edge UI",
};
export const revalidate = 0;
export default async function home() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const notes = await pb
        .collection("notes")
        .getFullList({ sort: "-created" });

    return (
        <>
            <CreateNote />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,400px))] gap-2">
                {notes.map((note) => (
                    <Notes
                        title={note.title}
                        content={note.content}
                        created={note.created}
                        id={note.id}
                    />
                ))}
            </div>
            <APICheck />
        </>
    );
}
