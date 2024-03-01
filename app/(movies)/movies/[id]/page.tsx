import { Suspense } from "react";
import MovieInfo from "@components/movie-info";
import MovieVideos from "@components/movie-videos";
import LoadMore from "@components/load-more";
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

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <>
      <MovieInfo id={id} />

      <Suspense fallback={<LoadMore />}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
