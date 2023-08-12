import AuthProvider from "./AuthProvider";
import Nav from "./components/nav";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <html lang="en">
                <body className="p-4 ">
                    <Nav />
                    {children}
                </body>
            </html>
        </AuthProvider>
    );
}
