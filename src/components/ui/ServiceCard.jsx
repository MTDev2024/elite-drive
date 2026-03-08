function ServiceCard({ title, description, icon }) {
  return (
    <div className="border border-zinc-700 bg-zinc-900 p-8 text-center">
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <div className="">
        <span className="text-2xl text-amber-400 mb-4 block">{icon}</span>
      </div>

      <p className="text-zinc-400 text-sm mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
