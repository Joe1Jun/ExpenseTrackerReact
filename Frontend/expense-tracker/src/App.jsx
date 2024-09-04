import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Components/Register/register';
import Login from './Components/Login/Login';
// Importing the background image from the local 'img' directory
import bg from './img/bg.png'
// Importing the MainLayout styled component
import { MainLayout } from './styles/Layouts'
//import the Orb component
import HomePage from './Components/HomePage/HomePage';
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Incomes/Incomes'
import Expenses from './Components/Expenses/Expenses';
//import Main from './styles/Main/Main'
import { useState , useMemo} from 'react'
import { useGlobalContext } from './context/globalContext'

// Define the App component

function App() {

  // State to track which menu item is active
  const { user } = useGlobalContext();
  const [active, setActive] = useState(1)
  const global = useGlobalContext()

 console.log(global)

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


  return (
   <AppStyled>
      <Orb />
      <Router>
        <Routes>
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>  : <Navigate to="/login" />} />
        
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>


   </AppStyled>
      
    );
  }

    




  
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
      width: 0
    }
    padding: 2rem;
  }
  
  `;


// Export the App component as the default export of this module
export default App