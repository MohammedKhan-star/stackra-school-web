import "./globals.css";

export const metadata = {
  title: "Royal International School",
  description:
    "A premium school website powered by STACKRA TECHNOLOGIES.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}