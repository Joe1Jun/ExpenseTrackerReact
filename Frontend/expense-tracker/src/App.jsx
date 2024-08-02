import React from 'react'
import styled from 'styled-components'
// Importing the background image from the local 'img' directory
import bg from './img/bg.png'
// Importing the MainLayout styled component
import { MainLayout } from './styles/Layouts'
//import the Orb component
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Incomes/Incomes'
import Expenses from './Components/Expenses/Expenses';
//import Main from './styles/Main/Main'
import { useState , useMemo} from 'react'

// Define the App component

function App() {

  // State to track which menu item is active
  const [active, setActive] = useState(1)


  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }
  //Callback Function: () => <Orb/> is a function that returns the Orb component.
  // [] is an empty array, meaning that this useMemo call has no dependencies. Therefore, the Orb component will only be computed once when the component mounts.
  const orbMemo = useMemo(() => {
        return <Orb/>

  }, [])

// {orbMemo}: Inserts the memoized Orb component into JSX. Preserves Animations: Ensures that animations or component state are not reset on every render. 
  return (
    <AppStyled bg={bg} className="App">
      
      
      {orbMemo}
      <MainLayout>
        {/* Render the Navigation component, passing active state and setActive function as props */}
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );

}
// Define a styled component named AppStyled
const AppStyled = styled.div`
    
  height: 100vh;
  /* Sets the background image of the component using the 'bg' prop. The image path is dynamically inserted here. */
  background-image: url(${props => props.bg });
  position: relative
  

  > ${MainLayout} {
    flex-direction: row;
  }

  

  main {
    flex: 1;
    background-color: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
    padding: 2rem;
  }
  
  `;


// Export the App component as the default export of this module
export default App
