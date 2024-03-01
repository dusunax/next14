import styles from "@styles/home.module.css";
import { IMovie } from "types/movie";

interface MovieSectionProps {
  children?: React.ReactNode;
}

export default function MovieSectionWrapper({ children }: MovieSectionProps) {
  return <section className={styles.movies}>{children}</section>;
}
