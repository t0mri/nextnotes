"use client";

import { useSession } from "next-auth/react";

export const metadata = {
    title: "t0mri",
    description: "b-liv me his so cool!",
};
export default function User() {
    const { data } = useSession();

    return (
        <div className=" grid place-items-center">
            <img
                src={data?.user?.image!}
                alt="user profile picture"
                className="mb-4 rounded-full border-8 border-yellow-400 p-4"
            />
            <h1 className="text-9xl">{data?.user?.name}</h1>
            <p>{data?.user?.email}</p>
        </div>
    );
}
