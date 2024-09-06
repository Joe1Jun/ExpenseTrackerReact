import React from "react";
import styled from 'styled-components'
import { dateFormat } from "../../utils/dateFormat";
import {bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt} from '../../utils/Icons'
import Button from '../Button/Button';


// These are the props passes from either the expenses or incomes components
function TransactionItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type

}) {

//The switch blocks switch on the category prop  being passed to this component.  
// When the getIcon method is called if the prop type is == to expense or income  the category is passed through the switch block and 
// returned to the div container that called it.
  // trimmed and put category to lowercase incase any issues with input.
    const normalizedCategory = category.trim().toLowerCase();
    const getIcon = () => {
        if (type === 'Expense') {
          // Handle expense categories
          switch (normalizedCategory) {
            case 'education':
              return book;
            case 'groceries':
              return food;
            case 'health':
              return medical;
            case 'subscriptions':
              return tv;
            case 'takeaways':
              return takeaway;
            case 'clothing':
              return clothing;
            case 'travelling':
              return freelance;
            case 'other':
              return circle;
            default:
              console.warn(`No icon found for expense category: ${category}`);
              return null;
          }
        } else {
          // Handle income categories
          switch (normalizedCategory) {
            case 'salary':
              return money;
            case 'freelancing':
              return freelance;
            case 'investments':
              return stocks;
            case 'stocks':
              return users;
            case 'bitcoin':
              return bitcoin;
            case 'bank':
              return card;
            case 'youtube':
              return yt;
            case 'other':
              return piggy;
            default:
              console.warn(`No icon found for income category: ${category}`);
              return null;
          }
        }
      };
    
    console.log('Type:', type);
    console.log('Category:', category);    
    // Throughout the return function the props are accessed which have values based
  // on the values passed from the components 
  // As each item is looped through and accessed one at a time the value attached to the props are unique to each
    return (
    // indicatorcolor  is passed as a prop to be used by the styled components
    // The reason this is not hard coded is to allow for more flexibility for future refactoring.  
    <TransactionItemItemStyled indicator = { indicatorColor } >
            {/* All the props that have been passed from parent are used here to display the data 
                for the current item being looped through   */}
            <div className="icons">
                 {getIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
            <div className="btn-con">
              {/* The DeleteItemButton component calls the deleteItem method passed as a prop from either incomes or expenses componenets 
              //  and adds the current item id also passed as prop as the argument
              //  This method is either the deleteIncome or deleteExpense method that is in the global context
              //  deleteitem will change depending on which component the prop is being passed from.  */}
              <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick= {() => deleteItem(id)}



                        />
                    </div>
                </div>
            </div>
       </TransactionItemItemStyled>
)




}

const TransactionItemItemStyled = styled.div`


background: #FCF6F9;
border: 2px solid #FFFFFF;
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
border-radius: 20px;
padding: 1rem;
margin-bottom: 1rem;
display: flex;
align-items: center;
gap: 1rem;
width: 100%;
color: #222260;

.icons{
    width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
}

.content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }

`;

export default TransactionItem