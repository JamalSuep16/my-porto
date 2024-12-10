import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section id="reviews" className="">
      <div className="w-3/4 m-auto">
        <div className="mt-20 ">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="bg-stone-400 rounded-xl p-1 w-29 text-center text-sm font-bold text-white">
              REVIEWS
            </h2>
          </div>
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-white h-[400px] text-black rounded-xl">
                <div className="rounded-t-xl bg-slate-700 flex justify-center items-center">
                  <img src={d.img} alt="" className="h-20 w-20 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.review}</p>
                  <button className="bg-zinc-900 text-white text-lg px-6 py-1 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    name: "Julaeha",
    img: "/images/people-1.jpg",
    review: "VERY GOOD DELEVOPER I LOVE IT",
  },
  {
    name: "Messi",
    img: "/images/people-2.jpg",
    review: "VERY GOOD DELEVOPER I LOVE IT",
  },
  // {
  //   name: "Yamal",
  //   img: "/images/people-3.jpg",
  //   review: "VERY GOOD DELEVOPER I LOVE IT",
  // },
  // {
  //   name: "Yamal",
  //   img: "/images/people-3.jpg",
  //   review: "VERY GOOD DELEVOPER I LOVE IT",
  // },
  // {
  //   name: "Yamal",
  //   img: "/images/people-3.jpg",
  //   review: "VERY GOOD DELEVOPER I LOVE IT",
  // },
];

export default Review;
