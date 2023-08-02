import Footer from "@/components/common/footer/footer";
import HomeBanner from "@/components/home/homeBanner/homeBanner";
import LandingNavbar from "@/components/home/navbar/navbar";
import OurServices from "@/components/home/ourServices/ourservices.js";

export default function Home() {
  return (
    <>
      <div
        style={{
          background: "url(background.svg)",
        }}
      >
        {" "}
        <LandingNavbar />
        <HomeBanner />
        <OurServices />
        <Footer/>
      </div>
    </>
  );
}
