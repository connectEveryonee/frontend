import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./link.module.css";
import Chip from "@/components/common/chip/chip";

export default async function Page({ params }) {
  const q = await Getlinks(params.userName);
  var Links = q[1].SimpleLink.links;

  return (
    <>
      <div className={styles.mainComp}>
        {Links.map((data) => {
          return (
            <>
              <Chip size="lg" herf={data.url} label={data.name} />
            </>
          );
        })}
      </div>
    </>
  );
}
