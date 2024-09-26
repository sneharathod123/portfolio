import React, { useEffect, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import styled from "styled-components";

function GotoTop() {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          {" "}
          <IoChevronUpSharp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.8rem;
    width: 2.5rem;
    height: 2.5rem;
    color: #000;
    background-color: #e2e2ff;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
`;

export default GotoTop;
