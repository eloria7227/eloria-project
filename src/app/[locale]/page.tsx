import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#061B1A]
      "
    >
      <Header />

      <Hero />
    </main>
  );
}