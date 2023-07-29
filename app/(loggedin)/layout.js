import Navbar from "@/components/common/navbar/navbar";

export default function EventManagerLayout({ children }) {
  if (typeof window !== "undefined") {
    // do localStorage stuff here
    const userInfo = {
      userName: localStorage.getItem("userName"),
      token: localStorage.getItem("token"),
    };
    store.dispatch(SetUser(userInfo));
  }
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
