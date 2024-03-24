import Image from "next/image";
import styles from "@styles/movie-info.module.css";
import { getMovie } from "app/action";
import { POSTER_URL } from "@constants/common";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const baseUrl = POSTER_URL;

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={baseUrl ? baseUrl + movie.poster_path : movie.poster_path}
          alt={movie.title}
          className={styles.poster}
          width={360}
          height={480}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.content}>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
          <p>{movie.overview ? movie.overview : movie.title}</p>
        </div>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
