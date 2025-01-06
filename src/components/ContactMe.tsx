const ContactMe = () => {
  return (
    <section id="contact" className="bg-slate-900">
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="bg-stone-400 rounded-xl p-1 w-29 text-center text-sm font-bold text-white">
              Get In Touch
            </h2>
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <p>
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
            <h2 className=" text-white text-2xl font-bold mt-5">
              aryasuhara6@gmail.com
            </h2>
            <h2 className="text-white text-2xl font-bold mt-5">
              +62 89512376842
            </h2>
            <p>You may also find me on these platforms!</p>
            <img
              src="/images/linkedin-logo.svg"
              alt=""
              className="mt-5 size-10"
            />
            <img src="/" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
