import LandingNavbar from "@/components/home/navbar/navbar";


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
