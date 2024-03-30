import React from "react";

function About() {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold my-2">About Us</h1>
        <img src="./images/about1.png" alt="image" className="mx-auto my-4" />
        <h1 className="text-3xl font-bold my-2">Our Purpose</h1>
        <p className="text-xl my-2">
          To provide innovative solutions through change
        </p>
      </div>

      <div className="bg-slate-100 text-center py-10">
        <div>
          <p className="p-4 text-lg">
            Lejhro's experienced management team drives our company, guides it
            to accomplish its vision, and inspires its employees to ensure
            clients achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            <div>
              <img
                src="./images/ceo.png"
                alt="img"
                className="mx-auto rounded-full w-60 md:w-80 my-5"
              />
              <h1 className="text-2xl font-bold my-5">Shakti Panigrahi</h1>
              <p className="text-xl font-bold my-5">CEO</p>
            </div>
            <div>
              <img
                src="./images/vice.jpg"
                alt="img"
                className="mx-auto rounded-full w-60 md:w-80"
              />
              <h1 className="text-2xl font-bold my-5">Bidintha Basumatary</h1>
              <p className="text-xl font-bold my-5">Vice President</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 text-center my-10 w-[90%] mx-auto justify-between gap-20">
        <div className="bg-slate-100">
          <img src="./images/vision.jpg" alt="img" className="w-80 mx-auto" />
          <h1 className="text-xl font-bold my-3">Vision</h1>
          <p>Lejhro was founded with a rebellious spirit and its objective was 'to be the change' and make a mark with its technological innovations and remarkable products.</p>
        </div>
        <div className="bg-slate-100">
          <img src="./images/mission.jpg" alt="img" className="w-80 mx-auto" />
          <h1 className="text-xl font-bold my-3">Mission</h1>
          <p>Provide quality and cost effective training to inspire, innovate and adapt to the evolving technology and accelerate business growth.</p>
        </div>
      </div>

      <div  className="bg-slate-100 p-20 text-center">
      <h1 className="text-2xl py-5 font-bold">Why Join us?</h1>
      <img src="./images/join.jpg" alt="img" className="mx-auto" />
      <p className="my-5 text-lg">Lejhro was founded with a rebellious spirit and its objective was to be the change and make a mark with its technological innovations and remarkable products.To apply mail your cv to <a href="mailto:hr@lejhro.com" className="hover:text-rose-700 hover:font-bold text-blue-600">hr@lejhro.com</a> </p>
      </div>
    </>
  );
}

export default About;
