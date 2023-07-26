import Image from "next/image";
import Header from "../../components/Header";
import Cards from "../../components/Cards";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <Header />
      <Cards />
    </main>
  );
}
