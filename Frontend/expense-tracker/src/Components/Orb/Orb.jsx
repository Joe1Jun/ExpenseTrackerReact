import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";
// Define keyframes for animation




function Orb() {
    const { width, height } = useWindowSize();
  
    const moveOrb = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(${width}px, ${height}px);
  }
  100% {
    transform: translate(0, 0);
  }
`;
    
// Define a styled component
const OrbStyled = styled.div`
  width: 70vh;               /* Set the width of the orb to 70% of the viewport height */
  height: 70vh;              /* Set the height of the orb to 70% of the viewport height */
  position: absolute;        /* Position the orb absolutely to control its placement on the screen */
  border-radius: 50%;        /* Make the div a circle by setting border-radius to 50% */
  margin-left: -37vh;        /* Center the orb horizontally by shifting it left */
  margin-top: -37vh;         /* Center the orb vertically by shifting it up */
  background: linear-gradient(180deg, #F56692 0%, #F2994A 100%); /* Apply a gradient background */
  filter: blur(100.5px);     /* Apply a blur filter to the orb */
  animation: ${moveOrb} 1s alternate linear infinite; /* Apply the animation */
`;

    return (
      <OrbStyled>
        {/* Content can go here */}
      </OrbStyled>
    );
  }

    





export default Orb;
