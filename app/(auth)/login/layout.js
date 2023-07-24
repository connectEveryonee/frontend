import LandingNavbar from "@/components/home/navbar/navbar";

export const metadata = {
  title: "Login",
  description: "Your Ultimate Event Partner.",
};

export default function Layout({ children }) {
  return (
    <>
      <LandingNavbar />
      {children}
    </>
  );
}
