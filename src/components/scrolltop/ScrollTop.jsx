import React from "react";
import "./_scrolltop.scss";

export default function ScrollTop() {
  return (
    <button
      className="scroll"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img
        src={process.env.PUBLIC_URL + "/images/chevron-white.svg"}
        alt="white chevron"
      />
    </button>
  );
}
