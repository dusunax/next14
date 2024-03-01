"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getMovieByComponents } from "@app/action";
import Spinner from "./load-spinner";
import MovieSectionWrapper from "./movie-section-wrapper";

let page = 2;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);

  const updateMoviesData = async () => {
    const res = await getMovieByComponents(page);
    setData([...data, ...res]);
    page++;
  };

  useEffect(() => {
    if (inView) updateMoviesData();
  }, [inView]);

  return (
    <div>
      <MovieSectionWrapper>{data}</MovieSectionWrapper>

      <div ref={ref}>
        <Spinner />
      </div>
    </div>
  );
}
