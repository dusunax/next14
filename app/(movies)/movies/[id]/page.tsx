import { Suspense } from "react";
import MovieInfo from "@components/movie/movie-info";
import MovieVideos from "@components/movie/movie-videos";
import LoadMore from "@components/movie/load-more";
import { getMovie } from "app/action";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <>
      <MovieInfo id={id} />

      <Suspense fallback={<LoadMore />}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
