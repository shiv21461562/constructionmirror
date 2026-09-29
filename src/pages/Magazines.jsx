import MagazineHero from "../components/magazines/MagazineHero";
import MagazineCard from "../components/magazines/MagazineCard";
import magazines from "../data/magazines";

function Magazines() {
  return (
    <main className="min-h-screen bg-[#f7f8fa]">

      <MagazineHero />

      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {magazines.map((magazine) => (
            <MagazineCard
              key={magazine.id}
              magazine={magazine}
            />
          ))}

        </div>
      </section>

    </main>
  );
}

export default Magazines;