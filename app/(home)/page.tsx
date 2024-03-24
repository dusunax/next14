import styles from "@styles/home.module.css";
import { getMovieByComponents } from "@app/action";
import LoadMore from "@components/movie/load-more";
import MovieSectionWrapper from "@components/movie/movie-section-wrapper";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const page = 1;
  const data = await getMovieByComponents(page);

  return (
    <main className={styles.container}>
      <h2>Popular Movies</h2>

      <MovieSectionWrapper>{data}</MovieSectionWrapper>
      <LoadMore />
    </main>
  );
}
