"use client";
import Link from "next/link";
import { IMovie } from "types/movie";
import { useRouter } from "next/navigation";
import styles from "@styles/movie.module.css";
import Image from "next/image";

interface IMovieProps extends IMovie {
  baseUrl?: string;
}

export default function Movie({
  id,
  poster_path,
  title,
  vote_average,
  baseUrl,
}: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  };

  return (
    <div className={styles.movie} key={id}>
      <div className={styles.aspect}>
        <Image
          src={baseUrl ? baseUrl + poster_path : poster_path}
          alt={title}
          onClick={onClick}
          width={360}
          height={480}
        />
      </div>
      <Link prefetch href={`movies/${id}`}>
        <p className={styles.info}>{title}</p>
        <p className={styles.star}>⭐️ {vote_average.toFixed(1)}</p>
      </Link>
    </div>
  );
}
