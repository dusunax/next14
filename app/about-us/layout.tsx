export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>About Us</h2>
      {children}
    </div>
  );
}
