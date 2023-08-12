"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function UserStatus() {
    const { data, status } = useSession();
    console.log(data);

    if (status === "loading") return <>...</>;
    if (status === "authenticated")
        return (
            <>
                <Link href={"user/" + data.user?.name!}>
                    <img
                        src={data.user?.image ?? "../../../public/vercel.svg"}
                        alt="profile"
                        className="h-10 rounded-full"
                    />
                </Link>
                <button
                    className="h-min rounded-lg bg-yellow-500 p-2"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </>
        );
    return (
        <>
            <button
                className="h-min rounded-lg bg-yellow-500 p-2"
                onClick={() => signIn()}
            >
                Sign in
            </button>
        </>
    );
}
