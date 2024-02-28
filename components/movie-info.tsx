import { API_URL } from "@constants/common";
import styles from "@styles/movie-info.module.css";
import Image from "next/image";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={movie.poster_path}
          alt={movie.title}
          className={styles.poster}
          width={360}
          height={480}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.content}>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐️ {movie.vote_average}</h3>
          <p>{movie.overview}</p>
        </div>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
