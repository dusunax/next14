import { Suspense } from "react";
import MovieInfo from "@components/movie-info";
import MovieVideos from "@components/movie-videos";
import Loading from "./loading";

interface MovieDetailProps {
  params: { id: string };
}

export default async function MovieDetail({
  params: { id },
}: MovieDetailProps) {
  return (
    <>
      <h2>🎥 Movie</h2>
      <Suspense fallback={<Loading />}>
        <MovieInfo id={id} />
      </Suspense>

      <h2>📺 Videos</h2>
      <Suspense fallback={<Loading />}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
