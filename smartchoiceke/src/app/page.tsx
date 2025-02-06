import NavBar from "@/components/header/NavBar";
import Home from "./_home/Home";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
