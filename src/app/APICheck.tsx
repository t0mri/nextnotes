export const revalidate = 0;

export default async function APICheck() {
    let APIValue = await fetch("http://localhost:3000/api", {
        method: "GET",
    }).then((response) => response.json());

    const changeMessage = async () => {
        APIValue = await fetch("http://localhost:3000/api", {
            method: "POST",
            body: "new message",
        }).then((response) => response.json());
    };
    let sk = async () => {
        let response = await fetch("http://localhost:3000/api", {
            method: "PATCH",
            body: "hello",
        }).then((res) => res.json());

        console.log("res:", response);
    };
    sk();
    return (
        <>
            <h1>{APIValue}</h1>
            {await changeMessage()}
            <h1>{APIValue}</h1>
        </>
    );
}
