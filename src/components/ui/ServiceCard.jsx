function ServiceCard({ title, description, icon }) {
  return (
    <div className="flex-1 p-10 text-center">
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <div className="">
        <span className="text-4xl">{icon}</span>
      </div>

      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
