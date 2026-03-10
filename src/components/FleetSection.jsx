import cars from "../data/cars";
import FleetCard from "./ui/FleetCard";

function FleetSection() {
  return (
    <section id="vehicules" className="bg-zinc-950 py-24 px-8 min-h-screen">
      <h2 className="text-white tracking-widest uppercase text-center mb-12">
        Nos Véhicules
      </h2>
      <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
        {cars.map((car) => (
          <FleetCard
            key={car.id}
            name={car.name}
            category={car.category}
            seats={car.seats}
            description={car.description}
            image={car.image}
          />
        ))}
      </div>
    </section>
  );
}

export default FleetSection;
