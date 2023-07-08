import Mobile from "@/components/common/mobile/mobilephone";
import HomeBanner from "@/components/home/homeBanner/homeBanner";
import LandingNavbar from "@/components/home/navbar/navbar";
import OurServices from "@/components/home/ourServices/ourservices.js";



export default function Home() {
  return (
    <>
      <div
        style={{
          background:
            "url(https://uploads-ssl.webflow.com/63ce8a45d805d5c08514e388/63dde8386bf1b16f7959f42f_hero%20Grains.svg)",
        }}
      >
        {" "}
        <LandingNavbar />
        <HomeBanner />
        {/* <Mobile/> */}
        <OurServices />
      </div>
    </>
  );
}
