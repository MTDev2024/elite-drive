import faq from "../data/faq";
import FaqItem from "./ui/FaqItem";

function FaqSection() {
  return (
    <section className="bg-zinc-950 py-24 px-8">
      <h2 className="text-white tracking-widest uppercase text-center mb-12">
        FAQ
      </h2>
      <div className="max-w-3xl mx-auto">
        {faq.map((item) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
