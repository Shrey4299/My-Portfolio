import React, { useState, useEffect } from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

function Header() {
  const [text, setText] = useState(""); // State for "Hello I'm"
  const [secondText, setSecondText] = useState(""); // State for "Shreyansh Dewangan"
  const [isSoftwareVisible, setIsSoftwareVisible] = useState(false); // State to control "Software Developer" visibility
  const fullText = "Hello I'm"; // Full text for the first typing effect
  const secondFullText = "Shreyansh Dewangan"; // Full text for the second typing effect
  const typingSound = new Audio("/images/typing.mp3"); // Correct path for the typing sound file

  // Preload the typing sound
  typingSound.load();

  // Function to play sound when typing second text
  const playTypingSound = () => {
    typingSound.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  // Typing effect logic for the first text ("Hello I'm")
  useEffect(() => {
    const delayId = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setText((prev) => prev + fullText[i]); // Append next character
        i += 1;
        if (i === fullText.length) {
          clearInterval(intervalId); // Stop typing once full text is typed
          // Start typing the second text ("Shreyansh Dewangan") after a delay
          setTimeout(() => {
            let j = 0;
            const secondIntervalId = setInterval(() => {
              setSecondText((prev) => prev + secondFullText[j]); // Append next character
              playTypingSound(); // Play typing sound on each character
              j += 1;
              if (j === secondFullText.length) {
                clearInterval(secondIntervalId); // Stop typing once second text is typed
                // After a 200ms delay, make "Software Developer" visible
                setTimeout(() => {
                  setIsSoftwareVisible(true);
                }, 500); // 200ms delay before showing "Software Developer"
              }

            }, 50); // Typing speed for the second text
          }, 500); // 500ms delay before starting the second typing effect
        }
      }, 50); // Typing speed for the first text
      return () => clearInterval(intervalId); // Cleanup the first interval on component unmount
    }, 600); // 600ms delay before starting the first typing effect

    return () => clearTimeout(delayId); // Cleanup timeout on component unmount
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Automatically click (simulate a click) to trigger the typing effect
  useEffect(() => {
    const simulateClick = () => {
      // Trigger typing sound and effect after a small delay
      playTypingSound();
    };

    // Simulate click after a slight delay when the page loads
    setTimeout(() => {
      simulateClick();
    }, 100); // Trigger after 500ms delay to simulate "page load"
  }, []); // Empty dependency array to ensure this runs only once

  return (
    <header className="pt-10 md:px-28 mx-5 md:mx-28 overflow-hidden mb-28">
      <div className="mx-auto text-center items-center relative">
        <h5 className="text-slate-300 mb-5 font-semibold typing-effect">{text}</h5>
        {/* Display "Shreyansh Dewangan" after "Hello I'm" finishes typing */}
        <h1 className="font-semibold text-3xl mb-5">{secondText}</h1>
        {/* Display "Software Developer" only after the second text is fully typed */}
        {isSoftwareVisible && <h5 className="text-slate-300 mb-5 font-semibold">Software Developer</h5>}
        <CTA />
        <HeaderSocial />

        <div className="flex w-full">
          <img
            src="/images/output-onlinegiftools.gif"
            className="object-cover over mx-auto justify-center items-center w-[500px] h-auto relative top-5"
            alt="Animated GIF"
          />
        </div>
        <a href="#contact" className="absolute right-[-2.3rem] bottom-20 transform rotate-90 text-sm text-blue-400">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
