import React from 'react'
import styled from 'styled-components'
// Importing the background image from the local 'img' directory
import bg from './img/bg.png'
// Importing the MainLayout styled component
import { MainLayout } from './styles/Layouts'
//import the Orb component
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation';

// Define the App component

function App() {

  return (
    <AppStyled bg={bg} className="App">
      <Orb/>
      <MainLayout>
        
        <Navigation/>
      </MainLayout>
    </AppStyled>
  );

}
// Define a styled component named AppStyled
const AppStyled = styled.div`
    
  height: 100vh;
  /* Sets the background image of the component using the 'bg' prop. The image path is dynamically inserted here. */
  background-image: url (${props => props.bg });
  position: relative
  
  `;


// Export the App component as the default export of this module
export default App
