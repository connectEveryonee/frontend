import LandingNavbar from "@/components/home/navbar/navbar";

export default function Layout({ children }) {
  return (
    <>
      <LandingNavbar />
      {children}
    </>
  );
}
