"use client";
import Link from "next/link";
import { IMovie } from "types/movie";
import { useRouter } from "next/navigation";
import styles from "@styles/movie.module.css";
import Image from "next/image";

interface IMovieProps {
  id: IMovie["id"];
  poster_path: IMovie["poster_path"];
  title: IMovie["title"];
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  };

  return (
    <div className={styles.movie} key={id}>
      <div className={styles.aspect}>
        <Image
          src={poster_path}
          alt={title}
          onClick={onClick}
          width={360}
          height={480}
        />
      </div>
      <Link href={`movies/${id}`}>{title}</Link>
    </div>
  );
}
