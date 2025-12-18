import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
