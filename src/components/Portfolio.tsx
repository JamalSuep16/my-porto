function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-900">
      <div className="max-w-7xl mt-20 mx-auto flex flex-col items-center">
        <h2 className="bg-stone-400 rounded-xl p-1 w-29 text-center text-sm font-bold text-white">
          PORTFOLIO
        </h2>
      </div>

      <div className="flex gap-3">
        {data.map((d) => (
          <div className="bg-white h-[400] text-black rounded-xl">
            <div
              className="rounded-t-xl bg-zinc-700 flex justify-center
             items-center"
            >
              <img src={d.img} alt="" className="h-5s0 w-50 rounded-t-xl" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    name: "Food Web",
    img: "/images/project-3.jpg",
    reviews:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quisquam eius rem sit! Voluptate, dicta ipsum quia excepturi reprehenderit accusamus ducimus reiciendis itaque, eaque ipsa quibusdam omnis autem sint corporis?",
  },
  {
    name: "E-Commerce",
    img: "/images/project-5.jpg",
    reviews:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quisquam eius rem sit! Voluptate, dicta ipsum quia excepturi reprehenderit accusamus ducimus reiciendis itaque, eaque ipsa quibusdam omnis autem sint corporis?",
  },
  {
    name: "Portfolio",
    img: "/images/project-6.jpg",
    reviews:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quisquam eius rem sit! Voluptate, dicta ipsum quia excepturi reprehenderit accusamus ducimus reiciendis itaque, eaque ipsa quibusdam omnis autem sint corporis?",
  },
];

export default Portfolio;
