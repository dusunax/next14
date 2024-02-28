import Link from "next/link";
import { API_URL } from "@constants/common";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
