
import LandingNavbar from "@/components/home/navbar/navbar";

export const metadata = {
  title: "Register",
  description: "Your Ultimate Event Partner.",
};
export default function Layout({ children }) {
  return (
    <>
      <div style={{ background: "/authbackground.png" }}>
        <LandingNavbar />
        {children}
      </div>
    </>
  );
}
