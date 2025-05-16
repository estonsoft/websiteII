import React from "react";
import "./ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className='process-section-header'>
      <h2 className="process-title">Process We Follow</h2>
      <p className="process-subtext">
      We work together with our client to execute impactful product.
      </p>
      </div>

      <div className="process-box box1">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="text-content">
          <h3>Plan</h3>
          <p>
          First, Plan the task by defining the requirements and prioritizing them based on business needs.
          </p>
        </div>
      </div>

      <div className="process-box box2">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="text-content">
          <h3>Build & Test</h3>
          <p>
          Next, Build & Test the update, ensuring the development is done efficiently with quick testing for quality assurance.
          </p>
        </div>
      </div>

      <div className="process-box box3">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="text-content">
          <h3>Deploy & Review</h3>
          <p>
          Finally, Deploy & Review the changes, releasing them to the live website and collecting feedback for any future improvements.
          </p>
        </div>
      </div>

      <div className="dashed-line line1"></div>
      <div className="dashed-line line2">
           <svg
      width="100%"
      height="100"
      viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: "0", top: "0" }}
    >
      <path
        d="M 0 50 Q 25 0, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50 T 450 50 T 500 50"
        stroke="red"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray="10,10"
      />
    </svg>
      </div>
      <div className="dashed-line line3"></div>
      <div className="dashed-line line4"></div>
    </section>
  );
};

export default ProcessSection;
