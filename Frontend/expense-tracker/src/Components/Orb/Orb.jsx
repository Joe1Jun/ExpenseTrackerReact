// Import React to create the component
import React from "react";
// Import styled-components and keyframes for styling
import styled, { keyframes } from "styled-components";
// Import the custom hook to get window siz
import { useWindowSize } from "../../utils/useWindowSize";




// Define the Orb component
function Orb() {
     // Get the current width and height of the window using the custom hook
    const { width, height } = useWindowSize();
  // Define keyframes for the orb's animation
    const moveOrb = keyframes`
    // Initial position
  0% {
    transform: translate(0, 0);
  }
  // Move to the bottom-right corner of the window
  50% {
    transform: translate(${width/1.2}px, ${height/2}px);
  }
  // Return to the initial position
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
  filter: blur(400px);     /* Apply a blur filter to the orb */
  animation: ${moveOrb} 15s alternate linear infinite; /* Apply the animation */
`;

    // Return the styled component to be rendered
    return (
        <OrbStyled>
           
        </OrbStyled>
    );
  }

// Export the Orb component as the default export of this module
export default Orb;
