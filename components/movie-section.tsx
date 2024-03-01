import styles from "@styles/home.module.css";
import { POSTER_URL } from "@constants/common";
import { IMovie } from "types/movie";
import Movie from "./movie";

interface MovieSectionProps {
  movieData: IMovie[];
}

export default function MovieSection({ movieData }: MovieSectionProps) {
  return (
    <section className={styles.movies}>
      {movieData.map((movie: IMovie, index) => (
        <Movie key={movie.id} {...movie} baseUrl={POSTER_URL} index={index} />
      ))}
    </section>
  );
}
