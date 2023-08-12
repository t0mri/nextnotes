"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import { FormEvent } from "react";

export default function Notes(props: {
    id: string;
    title: string;
    content: string;
    created: string;
}) {
    const currentnote = new PocketBase("http://127.0.0.1:8090").collection(
        "notes"
    );
    const router = useRouter();

    const updateNote = async (e: FormEvent<HTMLDivElement>) => {
        await currentnote.update(
            props.id,
            { content: e.currentTarget.innerText },
            { $autoCancel: false }
        );
    };
    const deletNote = () => {
        currentnote.delete(props.id);
        router.refresh();
    };

    return (
        <div className="rounded-xl bg-yellow-100 p-4">
            <div>
                <input
                    className="bg-transparent text-2xl outline-none"
                    defaultValue={props.title}
                />
                <Link
                    href={props.id}
                    className="rounded-xl bg-yellow-200 p-1 px-6"
                >
                    ↗
                </Link>
            </div>
            <hr className="m-2 mx-0" />
            <div
                className="h-fit w-full resize-none bg-transparent outline-none"
                onInput={(event) => updateNote(event)}
                contentEditable
            >
                {props.content}
            </div>
            <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 ">
                    {new Intl.DateTimeFormat("en-us").format(
                        new Date(props.created)
                    )}
                </span>
                <button
                    className="rounded-xl bg-yellow-200 px-3 py-2"
                    onClick={deletNote}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
