import React from "react";

const Slogan = () => {
  return (
    <section className="bg-black">
      <div className="md:min-h-[90vh] h-full w-[90%] m-auto grid md:grid-cols-2 grid-cols-1 gap-12 md:py-0 py-6">
        <div></div>
        <div className="h-full text-white font-primary flex flex-col justify-center gap-10">
          <h2
            className="font-bold lg:text-3xl text-2xl w-[90%] lgM:w-[100%]"
            data-aos="fade-left"
          >
            We are a multidisciplinary, shotgun-style creative consulting team,
            secretly responsible for some of the defining cultural trends of the
            2020s{" "}
          </h2>
          <div
            className="flex flex-col gap-5 font-medium w-[60%] lgM:w-[85%] text-lg"
            data-aos="fade-left"
          >
            <p>
              Our vision is sharply focused on evolving brand relationships with
              their base.
            </p>
            <p>
              Think of us as a strategic and creative partner, helping
              businesses architect new narratives to make their ambitions real.
            </p>
            <p>
              You've probably never heard of us--but then agian, that's kind of
              the point
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
