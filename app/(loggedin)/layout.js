import Navbar from "@/components/common/navbar/navbar";
import { cookies } from "next/dist/client/components/headers";

export default function EventManagerLayout({ children }) {
  ;
  return (
    <>
      <div>
        {" "}
        <Navbar />
        {children}
      </div>
    </>
  );
}
