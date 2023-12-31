import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./link.module.css";
import EventsChip from "@/components/events/eventsChip";
import Heading from "@/components/common/Heading/Heading";

export default async function Page({ params }) {
  const Links = await Getlinks(params.userName);

  return (
    <>
      <head>
        <title>{params.userName}</title>
      </head>
      <body>
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
                <EventsChip key={index} url={data.url} title={data.name} />
              );
            })}
          </div>
        </div>
      </body>
    </>
  );
}
