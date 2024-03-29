import styles from "@styles/about-us.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <h2>About Us</h2>
      {children}
    </div>
  );
}
