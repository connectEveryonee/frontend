import Navbar from "@/components/common/navbar/navbar";

export default function EventManagerLayout({ children }) {
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
