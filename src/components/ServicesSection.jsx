import services from "../data/services";
import ServiceCard from "./ui/ServiceCard";

function ServicesSection() {
  return (
    <section className="bg-zinc-950 py-24 px-8">
      <h2 className="text-white tracking-widest uppercase text-center mb-12">
        Nos prestations
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
