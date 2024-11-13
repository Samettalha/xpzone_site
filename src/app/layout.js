import Footer from "@/components/common/footer";
import "./globals.css";
import Navbar from "@/components/common/navbar";

export const metadata = {
  title: "XPZone",
  description: "XPZone Official Website",
  authors: [{ name: "Ege Ayan", url: "https://github.com/ege-ayan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#161616]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
