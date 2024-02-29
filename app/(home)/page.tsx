import { POSTER_URL } from "@constants/common";
import { IMovie } from "types/movie";
import styles from "@styles/home.module.css";
import { getMovies } from "app/action";
import Movie from "@components/movie";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const page = 1;
  const { results: movies } = await getMovies(page);

  return (
    <div className={styles.container}>
      {movies.map((movie: IMovie) => (
        <Movie key={movie.id} {...movie} baseUrl={POSTER_URL} />
      ))}
    </div>
  );
}
