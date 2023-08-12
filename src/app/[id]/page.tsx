import PocketBase from "pocketbase";

export default async function Note({ params }: any) {
    const data = await new PocketBase("http://127.0.0.1:8090")
        .collection("notes")
        .getOne(params.id);

    return (
        <div className="flex flex-col gap-2 bg-yellow-100 p-4">
            <h1 className="text-5xl">Title: {data.title}</h1>
            <p>Content: {data.content}</p>
            <p>Collection name: {data.collectionName}</p>
            <p>Created at: {data.created}</p>
            <p>last updated: {data.updated}</p>
        </div>
    );
}
