import { useState } from "react";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 py-5">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer group"
      >
        <span className="text-white font-medium group-hover:text-amber-400 transition-colors">
          {question}
        </span>

        <span className="text-amber-400 text-lg ml-4">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <p className="text-zinc-400 text-base mt-4 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default FaqItem;
