import { FiArrowUpRight } from "react-icons/fi";

const formations = [
  {
    id: 1,
    date: "Jan 2021 - Aug 2021",
    title: "Lorem | Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada sodales finibus. Donec eget est nec nulla interdum facilisis. Praesent in tellus elementum, euismod quam id, vulputate lectus. Mauris rutrum risus ac mi feugiat gravida. Ut rhoncus libero finibus lorem finibus, vel laoreet nunc hendrerit. Integer nec elementum felis.",
  },
  {
    id: 2,
    date: "Jan 2022 - Dec 2022",
    title: "Ipsum | Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada sodales finibus. Donec eget est nec nulla interdum facilisis. Praesent in tellus elementum, euismod quam id, vulputate lectus. Mauris rutrum risus ac mi feugiat gravida. Ut rhoncus libero finibus lorem finibus, vel laoreet nunc hendrerit.",
  },
  {
    id: 3,
    date: "Aug 2019 - Dec 2020",
    title: "Lorem Ipsum | Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada sodales finibus. Donec eget est nec nulla interdum facilisis. Praesent in tellus elementum, euismod quam id, vulputate lectus. Mauris rutrum risus ac mi feugiat gravida. Ut rhoncus libero finibus lorem finibus, vel laoreet nunc hendrerit. Integer nec elementum felis.",
  },
];

export function Formation() {
  return (
    <section
      id="formation"
      className="w-full max-w-4xl mx-auto px-8 py-24 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-16 text-center">
        Formation<span className="text-primary">.</span>
      </h2>

      <div className="flex flex-col gap-12 w-full">
        {formations.map((formation) => (
          <div
            key={formation.id}
            className="flex flex-col md:flex-row gap-4 md:gap-12 w-full group cursor-default"
          >
            {/* Date */}
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-primary font-mono text-sm tracking-tighter whitespace-nowrap">
                {formation.date}
              </span>
            </div>

            {/* Content */}
            <div className="md:w-3/4 flex flex-col gap-2">
              <h3 className="text-white font-bold text-xl flex items-center gap-2 group-hover:text-primary transition-colors">
                {formation.title}
                <FiArrowUpRight className="text-primary opacity-70" />
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {formation.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
