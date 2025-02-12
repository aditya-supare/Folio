"use client";
import anime from "animejs";
import React, { useEffect } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const startLoader = () => {
    const counterElement = document.querySelector(".count p");
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < 100) {
        const increment = Math.floor(Math.random() * 10) + 1;
        currentValue = Math.min(currentValue + increment, 100);
        counterElement.textContent = currentValue;

        const delay = Math.floor(Math.random() * 150) + 25;
        setTimeout(updateCounter, delay);
      }
    };

    updateCounter();
  };

  useEffect(() => {
    startLoader();

    gsap.to(".count", {
      opacity: 0,
      delay: 3.5,
      duration: 0.3,
    });

    gsap.to(".pre-loader", {
      scale: 0.5,
      ease: "power4.inOut",
      duration: 0.5,
      delay: 3.5,
    });

    gsap.to(".loader", {
      height: "0",
      ease: "power4.inOut",
      duration: 0.5,
      delay: 3.75,
    });

    gsap.to(".loader-bg", {
      height: "0",
      ease: "power4.inOut",
      duration: 0.5,
      delay: 3.85,
    });

    gsap.to(".loader-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 0.5,
      delay: 3.8,
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    const textWrapper = document.querySelector(".ml16");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      `<span class='letter'>$&</span>`
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml16 .letter",
        translateY: [-200, 0],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 25 * i,
      })
      .add({
        targets: ".ml16 .letter",
        translateY: [0, 200],
        easing: "easeOutExpo",
        duration: 4000,
        delay: (el, i) => 2000 + 25 * i,
      });
  }, []);

  return (
    <div className="container">
      <div className="pre-loader">
        <div className="loader"></div>
        <div className="loader-bg"></div>
      </div>
      <div className="loader-content">
        <div className="count">
          <p>0</p>
        </div>
        <div className="copy">
          <p className="ml16 folio">Loading</p>
        </div>
      </div>
      <div className="loader-2"></div>
    </div>
  );
};

export default Preloader;
