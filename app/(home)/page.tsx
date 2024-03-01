import styles from "@styles/home.module.css";
import { getMovies } from "@app/action";
import LoadMore from "@components/load-more";
import MovieSection from "@components/movie-section";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const page = 1;
  const { results: movies } = await getMovies(page);

  return (
    <main className={styles.container}>
      <h2>Popular Movies</h2>

      <MovieSection movieData={movies} />
      <LoadMore />
    </main>
  );
}
