import Link from "next/link";
import Image from "next/image";
import { IMovie } from "types/movie";
import styles from "@styles/movie.module.css";
import { MotionDiv } from "./motion-div";

interface IMovieProps extends IMovie {
  baseUrl?: string;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Movie({
  id,
  poster_path,
  title,
  vote_average,
  baseUrl,
  index,
}: IMovieProps) {
  return (
    <MotionDiv
      className={styles.movie}
      initial="hidden"
      animate="visible"
      transition={{ delay: (index % 20) * 0.1, ease: "easeIn", duration: 0.5 }}
      variants={variants}
    >
      <Link prefetch href={`movies/${id}`}>
        <div className={styles.aspect}>
          <Image
            src={baseUrl ? baseUrl + poster_path : poster_path}
            alt={title}
            width={360}
            height={480}
          />
        </div>
        <p className={styles.info}>{title}</p>
        <p className={styles.star}>⭐️ {vote_average.toFixed(1)}</p>
      </Link>
    </MotionDiv>
  );
}
