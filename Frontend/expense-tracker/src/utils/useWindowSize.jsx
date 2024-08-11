import { useEffect, useState } from "react"


// Custom hook to get the current window size
export const useWindowSize = () => {
// State to store the window's width and height
    const [size, setSize] = useState([0, 0])
    // useEffect to set up and clean up the event listener
    useEffect(() => {
        // Function to update the state with the current window size
        const updateSize = () => {
            
            setSize([window.innerWidth, window.innerHeight])
        }
        // Calls the function to immediately det the initial window size
        updateSize();
        // Add event listener for window resize
        window.addEventListener('resize', updateSize)
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', updateSize)
        // Empty dependency array ensures this effect runs only once on mount
    }, [])
  // Return the current width and height as an object
    return {
        width: size[0],
        height: size[1]
    }
}