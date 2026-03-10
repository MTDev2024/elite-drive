import Button from "./ui/Button";

function HeroSection() {
  return (
    <section
      id="home"
      className="bg-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-8
"
    >
      <h1
        className="text-5xl font-bold tracking-widest uppercase mb-4
"
      >
        Votre chauffeur privé d'exception
      </h1>
      <h2
        className="text-zinc-400 tracking-widest mb-10
"
      >
        "Discrétion, élégance et ponctualité à votre service"
      </h2>
      <div
        className="flex gap-4
"
      >
        <Button label="Réserver" variant="primary" onClick={() => {}} />
        <Button label="Découvrir" variant="secondary" onClick={() => {}} />
      </div>
    </section>
  );
}

export default HeroSection;
