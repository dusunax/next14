"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getMovies } from "@app/action";
import Spinner from "./load-spinner";
import MovieSection from "./movie-section";

let page = 2;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);

  const updateMoviesData = async () => {
    const { results: res } = await getMovies(page);
    setData([...data, ...res]);
    page++;
  };

  useEffect(() => {
    if (inView) updateMoviesData();
  }, [inView]);

  return (
    <div ref={ref}>
      <MovieSection movieData={data} />
      <Spinner />
    </div>
  );
}
