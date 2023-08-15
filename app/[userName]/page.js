
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./link.module.css";
import EventsChip from "@/components/events/eventsChip";
import Heading from "@/components/common/Heading/Heading";
import { CheckuserName } from "@/api/user/userService";
import Text from "@/components/common/text/text";
import { PageAnalytics } from "@/api/analytics/analytics";

export const generateMetadata = ({ params }) => {
  return {
    title: `${params.userName}`,
  };
};
export default async function Page({ params }) {
  const checkUsername = await CheckuserName(params.userName);


  if (checkUsername.status === 404) {
    return (
      <>
        <section className={styles.mainComp}>
          {" "}
          <Heading size="md" fontFamily="var(--system-font)">
            {"The page you’re looking for doesn’t exist."}
          </Heading>
          <div>
            <Text size="lg" color="grey">
              Grap this username by{" "}
              <a href="/register" style={{ textDecoration: "none" }}>
                Registering
              </a>
            </Text>
          </div>
        </section>
      </>
    );
  } else {
    const Links = await Getlinks(params.userName);
     const updateAnalytics = await PageAnalytics(params.userName);
    return (
      <>
        <div className={styles.mainComp}>
          <div className={styles.headingComp}>
            <Heading size="md" cplor="var(--black-1)">
              {" "}
              <b>@</b> {params.userName}
            </Heading>
          </div>
          <div className={styles.links}>
            {Links.map((data, index) => {
              return (
                <EventsChip key={index} url={data.url} title={data.name} userName={params.userName} />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
