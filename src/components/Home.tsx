// import videoBg from "../assets/background-mario.mp4";

// const Home = () => {
//   return (
//     <section>
//       <div className="home">
//         <video src={videoBg} autoPlay loop muted />
//         <div className="absolute w-full h-96 top-0 flex flex-col justify-center items-center text-white text-5xl font-bold ">
//           <h1 className="">HI, Welcome👋</h1>
//           <p>To My Site!</p>
//           <div className="w-52 h-52">
//             <img src="/images/ProfileArya.jpeg" alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import videoBg from "../assets/background-mario.mp4";

const Home = () => {
  return (
    <section
      id="home"
      className="overflow-hidden relative min-h-screen flex justify-center items-center"
    >
      <video
        src={videoBg}
        className="absolute h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="w-full h-96 flex  justify-center items-center  text-white text-5xl font-bold relative z-10 flex-col sm:flex-row">
        <div>
          <h1 className="">HI, Welcome👋</h1>
          <p>To My Site!</p>
        </div>
        <div className="w-52 h-52 ml-10">
          <img
            className="rounded-xl shadow-md shadow-slate-50 "
            src="/images/ProfileArya.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
