import React, { useEffect } from "react";
import logoGif from "../assets/images/enigmaOptimised.gif";

import one from "../assets/images/gallery/img1.PNG";
import two from "../assets/images/gallery/img2.PNG";
import three from "../assets/images/gallery/img3.PNG";
import four from "../assets/images/gallery/Screen Shot.png";
import five from "../assets/images/gallery/Screen Shot2.png";
import six from "../assets/images/gallery/Screen Shot3.png";
import seven from "../assets/images/gallery/Screen Shot4.png";

const Gallery = () => {
  const images = [
    {
      src: one,
    },
    {
      src: two,
    },
    {
      src: three,
    },
    {
      src: four,
    },
    {
      src: five,
    },
    {
      src: six,
    },
    {
      src: seven,
    },
  ];

  useEffect(() => {
    const els = document.querySelectorAll("[type='radio']");
    for (const el of els)
      el.addEventListener("input", (e) => reorder(e.target, els));
    reorder(els[0], els);

    function reorder(targetEl, els) {
      const nItems = els.length;
      let processedUncheck = 0;
      for (const el of els) {
        const containerEl = el.nextElementSibling;
        if (el === targetEl) {
          //checked radio
          containerEl.style.setProperty("--w", "100%");
          containerEl.style.setProperty("--l", "0");
        } else {
          //unchecked radios
          containerEl.style.setProperty("--w", `${100 / (nItems - 1)}%`);
          containerEl.style.setProperty(
            "--l",
            `${(processedUncheck * 100) / (nItems - 1)}%`
          );
          processedUncheck += 1;
        }
      }
    }
  }, []);

  return (
    <section className="bg-primary mb-[12rem]">
      <div className="sm:min-h-screen h-full w-[90%] m-auto grid sm:grid-cols-2 grid-cols-1 py-[3rem] sm:py-0">
        <div className="flex justify-center items-center h-full">
          <div>
            <img
              src={logoGif}
              alt="Enigma Logo"
              className="lg:max-w-[30rem] md:max-w-[22rem] max-w-[17rem] mx-auto"
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div class="w sm:w-[50vmin] w-[75vmin]">
            <div class="ts">
              {images.map((image, i) => (
                <>
                  <input type="radio" id={`c${i}`} name="ts" />
                  <label class="t" for={`c${i}`}>
                    <img src={image.src} />
                  </label>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
