//This imports the core React library.
import React from 'react'
// This imports the ReactDOM library for rendering React components to the DOM. The /client part indicates that this is the client-side rendering module.
import ReactDOM from 'react-dom/client'
// his imports the App component from the App.jsx file. The App component is the main component of the application.
import App from './App.jsx'
//his imports the GlobalStyle component, which is a styled-components global style definition.
import { GlobalProvider } from './context/globalContext.jsx'
import { GlobalStyle } from './styles/GlobalStyle'

// This function is responsible for rendering the React application to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode is a tool for highlighting potential problems in an application.
  // It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    {/* GlobalStyle is a styled-components global style component.
        It applies global styles to the application. */}
    <GlobalStyle />
    <GlobalProvider>
    <App />
    </GlobalProvider>
    {/* The App component is the root component of the application.
        It is rendered inside the root div. */}
   
  </React.StrictMode>
)

