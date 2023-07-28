import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SimpleLinks",
  description: "Sharing Links made Simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer autoClose={2000} /> <main> {children}</main>{" "}
      </body>
    </html>
  );
}
