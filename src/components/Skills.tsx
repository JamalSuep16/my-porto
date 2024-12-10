import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section id="skills">
      <div className="w-3/4 m-auto">
        <div className="mt-20 ">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="bg-stone-400 rounded-xl p-1 w-29 text-center text-sm font-bold text-white">
              SKILLS
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
    name: "Java Script",
    img: "/images/javascript-logo.svg",
    review:
      "JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It's one of the core technologies of the web (along with HTML and CSS) and is primarily used to build dynamic, responsive, and interactive web pages.",
  },
  {
    name: "Type Script",
    img: "/images/typescript-logo.svg",
    review:
      "TypeScript is a superset of JavaScript, developed by Microsoft, which adds static typing and other features to the language. TypeScript code is then compiled (or transpiled) into plain JavaScript so that it can run in any environment that supports JavaScript, such as browsers or Node.js.",
  },
  {
    name: "HTML",
    img: "/images/html-logo.svg",
    review:
      "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It forms the foundation of web pages by defining the structure, layout, and various elements that appear in a webpage, such as text, images, links, forms, and multimedia.",
  },
  {
    name: "CSS",
    img: "/images/css-logo.svg",
    review:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
  },
  {
    name: "REACT",
    img: "/images/reactjs-logo.svg",
    review:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
  },
  {
    name: "TAILWIND",
    img: "/images/tailwindcss-logo.svg",
    review:
      "Tailwind can refer to a few different things, including a wind that moves in the same direction as a course of movement, a force that advances progress, or a framework for building websites",
  },
  {
    name: "NEXT JS",
    img: "/images/nextjs-logo.svg",
    review: "",
  },
  {
    name: "NODE JS",
    img: "/images/nodejs-logo.svg",
    review:
      "Next. js is a powerful web development framework that simplifies the process of building fast, interactive applications. ",
  },
  {
    name: "GIT",
    img: "/images/git-logo.svg",
    review:
      "Git is a free, open-source version control system that helps developers track changes to files and collaborate on projects",
  },
  {
    name: "MY SQL",
    img: "/images/mysql-logo.svg",
    review:
      "In MySQL, the EXPLAIN statement is used to display information about how MySQL executes a query. It provides insight into the query execution plan, helping you understand how the database engine processes and retrieves data.",
  },
  {
    name: "FIGMA",
    img: "/images/figma-logo.svg",
    review:
      "Figma is a web-based design tool that allows users to create, share, and test digital products and experiences",
  },
];

export default Skills;
