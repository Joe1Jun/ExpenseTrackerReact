import styled from 'styled-components'


// MainLayout is a styled-component that acts as a container for the main content
export const MainLayout = styled.div`

    padding: 2rem;
    height: 100%;
    /* Uses Flexbox layout to align child elements. */
    display: flex;
    /* Adds a gap of 2rem between flex items (child elements).
    gap: 2rem;



`;

// InnerLayout is a styled-component that provides a smaller, more specific layout inside the MainLayout
export const InnerLayout = styled.div`

   padding: 2rem 1.5rem;
   /* Sets the width of the container to 100% of its parent element's width. */
   width: 100%;



`;

