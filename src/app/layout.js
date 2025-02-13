import { Bitter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Red Velvet",
  description: "Hi, I'm the English Project :3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} antialiased bg-primary min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
