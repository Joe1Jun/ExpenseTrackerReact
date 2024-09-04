import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useGlobalContext } from '../../context/globalContext'

// Navigation component definition
// Takes the active and setactive  as props
function Navigation({ active, setActive }) {
    
    const { user, logoutUser } = useGlobalContext();
    
    const handleLogout = async () => {
        try {
          await logoutUser(); // Call the logout function
         
        } catch (err) {
            console.error(err); // Handle any errors
            console.log(user);
        }
      };
    return (
        <NavStyled>
            {/* User information section */}
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Joe</h2>
                    <p>Your Money</p>
                </div>
            </div>

            <ul className="menu-items">
                {/* Iterate over menuItems array and render each item */}
                 {/*Sets the active item when clicked. */}
                {menuItems.map((item) => (
                    <li key={item.id}
                       
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                       
                        {/* Display the icon of the menu item */}
                        {item.icon}
                        {/* Display the title of the menu item */}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>

            {/* Bottom navigation section with sign out option */}
            <div className="bottom-nav">
                <li>
                    <button type='submit' onClick={handleLogout}>
                    {signout} Sign Out
                    </button>
                   
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    /* Basic padding and dimensions for the navigation container */
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78); /* Semi-transparent background */
    border: 3px solid #FFFFFF; /* White border */
    backdrop-filter: blur(4.5px); /* Blur effect for the background */
    border-radius: 32px; /* Rounded corners */
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Arrange children in a column */
    justify-content: space-between; /* Space out children evenly with space at the ends */
    gap: 2rem; /* Gap between flex children */

    /* User information section styling */
    .user-con{
        height: 100px; /* Fixed height for the user section */
        display: flex; /* Use flexbox for layout */
        align-items: center; /* Center items vertically */
        gap: 1rem; /* Space between the avatar and text */

        /* Avatar image styling */
        img{
            width: 80px; /* Fixed width */
            height: 80px; /* Fixed height */
            border-radius: 50%; /* Make the image circular */
            object-fit: cover; /* Ensure the image covers the element while maintaining aspect ratio */
            background: #fcf6f9; /* Background color */
            border: 2px solid #FFFFFF; /* White border around the image */
            padding: .2rem; /* Padding inside the border */
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06); /* Subtle shadow for depth */
        }

        /* User name styling */
        h2{
            color: rgba(34, 34, 96, 1); /* Dark blue color for the name */
        }

        /* User subtitle styling */
        p{
            color: rgba(34, 34, 96, 0.6); /* Lighter blue color for the subtitle */
        }
    }

    /* Menu items list styling */
    .menu-items{
        flex: 1; /* Allow the menu items to grow and fill the available space */
        display: flex; /* Use flexbox for layout */
        flex-direction: column; /* Arrange children in a column */

        /* Individual menu item styling */
        li{
            display: grid; /* Use CSS Grid for layout */
            grid-template-columns: 40px auto; /* Define two columns: one for the icon and one for the text */
            align-items: center; /* Center items vertically */
            margin: .6rem 0; /* Vertical margin between list items */
            font-weight: 500; /* Semi-bold text */
            cursor: pointer; /* Change cursor to pointer on hover */
            transition: all .4s ease-in-out; /* Smooth transition for all properties */
            color: rgba(34, 34, 96, 0.6); /* Lighter blue color for the text */
            padding-left: 1rem; /* Left padding */
            position: relative; /* Relative positioning for potential child elements */
        }

        /* Icon styling within menu items */
        i{
            color: rgba(34, 34, 96, 0.6); /* Lighter blue color for the icons */
            font-size: 1.4rem; /* Font size for the icons */
            transition: all .4s ease-in-out; /* Smooth transition for all properties */
        }
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
       i{
        color: rgba(34, 34, 96, 1); 

       } 
       &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;  
            height: 100%;
            background: #222260;     
            border-radius: 0 10px 10px 0;            
       }
    }
`;

export default Navigation;

