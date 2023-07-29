'use client'
import Navbar from "@/components/common/navbar/navbar";
import SetLocalStorage from "@/utility/localStorage";

export default function EventManagerLayout({ children }) {
  SetLocalStorage();
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
