import { Suspense } from "react";
import MovieInfo, { getMovie } from "@components/movie-info";
import MovieVideos from "@components/movie-videos";
import Spinner from "@components/spinner";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <>
      <MovieInfo id={id} />

      <Suspense fallback={<Spinner />}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
