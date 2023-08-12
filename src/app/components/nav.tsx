import Link from "next/link";
import UserStatus from "./UserStatus";

export default function Nav() {
    return (
        <div className="flex justify-between">
            <Link href={"/"}>
                <h1 className="mb-4 p-2">Next Notes</h1>
            </Link>
            <div className="flex gap-2">
                <Link href="/api">
                    <button className="p-2">APIs</button>
                </Link>
                <UserStatus />
            </div>
        </div>
    );
}
