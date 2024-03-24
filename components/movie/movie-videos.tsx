import styles from "@styles/movie-videos.module.css";
import { getVideoByComponents } from "app/action";

export default async function MovieVideos({ id }: { id: string }) {
  const data = await getVideoByComponents(id);

  return <div className={styles.container}>{data}</div>;
}
