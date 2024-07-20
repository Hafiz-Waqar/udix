import {
  Footer,
  Header,
  Section1st,
  Section2nd,
  Section3rd,
  Section4th,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Section1st />
      <Section2nd />
      <Section3rd />
      <Section4th />
      <Footer />
    </main>
  );
}
