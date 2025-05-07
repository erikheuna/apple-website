// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  //TODO: implement the gsap.to() method
 
  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to
        create animations that are triggered by the scroll position of the page.
      </p>
      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at a specific
        scroll points, such as starting or ending an animation, scrubbinh through animations
        as the user scrolls, pinning elements to the screen, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.scrollTrigger()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger{" "}
        </a>
        method.
      </p>

      <div className="mt-20 space-y-10">
        
      </div>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
