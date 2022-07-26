import React, { useLayoutEffect, useRef, useState, FC } from "react";
import { ProgressProps } from "../../../interfaces";
import "./CircularProgress.css";



const CircularProgress: FC<ProgressProps> = ({
  percent,
  workTime,
  children,
}) => {
  const strokeSize: number = 15;
  const box = useRef<HTMLDivElement>(null);
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);
  const [circumference, setCircumference] = useState<number>(0);
  const [windowSize, setWindowSize] = useState({ width: 0, heigth: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, heigth: window.innerHeight });
    };
    const boxHeight = box.current ? box.current.offsetHeight:0;
    const boxWidth = box.current ? box.current.offsetWidth:0;
    const circleSize = (boxHeight <= boxWidth) ? boxWidth:boxHeight;
    setSvgWidth(box.current ? circleSize : 0);
    setRadius(svgWidth / 2 - strokeSize);
    setCircumference(2 * Math.PI * radius);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [box, svgWidth, radius, circumference, workTime, windowSize]);

  return (
    <div ref={box} className="box">
      {children}
      <svg className="time-circle" width={svgWidth} height={svgWidth}>
        <circle
          className="circle"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
          }}
          stroke={workTime ? "lightcoral" : "MediumSeaGreen"}
          strokeWidth={strokeSize}
          cx={svgWidth / 2}
          cy={svgWidth / 2}
          r={svgWidth / 2 - strokeSize}
          fill="none"
        ></circle>
        <circle
          className="circle"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: `${(percent / 100) * (0.85 * circumference)}`,
          }}
          stroke={workTime ? "red" : "green"}
          strokeWidth={strokeSize}
          cx={svgWidth / 2}
          cy={svgWidth / 2}
          r={svgWidth / 2 - strokeSize}
          fill="none"
        ></circle>
        <circle
          className="circle"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: `${0.85 * circumference}`,
            transition: "stroke-dashoffset 0.0s",
          }}
          stroke="darkgreen"
          strokeWidth={strokeSize}
          cx={svgWidth / 2}
          cy={svgWidth / 2}
          r={svgWidth / 2 - strokeSize}
          fill="none"
        ></circle>
      </svg>
    </div>
  );
};

export default CircularProgress;
