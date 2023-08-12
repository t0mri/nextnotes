"use client";

import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

export default function CreateNote() {
    const router = useRouter();

    const addNote = (title: string, content: string) => {
        new PocketBase("http://127.0.0.1:8090")
            .collection("notes")
            .create({ title, content });

        router.refresh();
    };
    return (
        <form
            className="mb-4 bg-yellow-100 p-2"
            onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                addNote(
                    formData.get("title") as string,
                    formData.get("content") as string
                );
                event.currentTarget.reset();
            }}
        >
            <h1>Capture</h1>
            <input
                type="text"
                name="title"
                className="mb-2 bg-yellow-50 p-2 outline-none"
            />
            <br />
            <textarea
                name="content"
                className="resize bg-yellow-50 p-2 outline-none"
            ></textarea>
            <br />
            <button className="rounded-xl bg-yellow-50 p-2 px-4 active:bg-yellow-100">
                Add
            </button>
        </form>
    );
}
