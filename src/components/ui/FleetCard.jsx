function FleetCard({ name, category, seats, description, image }) {
  return (
    <div className="border border-zinc-700 bg-zinc-900 p-8 text-center">
      <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
      <div className="text-2xl text-amber-400 mb-4 block">{category}</div>
      <div className="">{seats} passagers</div>
      <img src={image} alt={name} />
      <p className="text-zinc-400 text-sm mt-2">{description}</p>
    </div>
  );
}

export default FleetCard;
