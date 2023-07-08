import Navbar from "@/components/common/navbar/navbar";

export default function EventManagerLayout({ children }) {
  return (
    <>
      <Navbar />
      {
        children
      }
    </>
  );
}
