// Importing icons from the '../utils/Icons' module
import { dashboard, expenses, transactions, trend } from './Icons'
// Defining an array of menu items with their properties

export const menuItems = [
    // When map() is called on these items it will loop over them in the order they were entered into the array.
    
    {
        id: 1, // Unique identifier for the menu item
        title: 'Dashboard',// Title of the menu item
        icon: dashboard, // Icon associated with the menu item
        link: '/dashboard' // URL to navigate to when the item is clicked
    },
    
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
]