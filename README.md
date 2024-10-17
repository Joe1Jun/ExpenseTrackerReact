# Expenses Tracker

This web application allows users to track their income and expenses. It features user authentication, data visualization, and secure access to personal financial data.

## Key Features

- User registration and login with JWT authentication.
- Add, view, and delete income and expense entries.
- Visualize income and expenses using Chart.js.
- User-specific data with secure access.
- JWT stored in HTTP-only cookies for enhanced security.

## Technologies Used

- **Backend:** Node.js with Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Password Hashing:** bcrypt.js
- **Frontend:** React with Vite
- **Data Visualization:** Chart.js
- **Styling:** Styled Components

## Setup

1. **Clone the Repository:**
   - Open your terminal and run:
     ```bash
     git clone https://github.com/Joe1Jun/ExpenseTrackerReact.git
     ```

2. **Install Dependencies:**
   - Navigate to both the backend and frontend directories:
     ```bash
     cd ExpenseTrackerReact/Backend
     npm install  # For the backend directory
     cd ExpenseTracker/Frontend/expense-tracker
     npm install  # For the frontend directory (Vite project)
     ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the backend directory and add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Replace `your_mongodb_connection_string` with your MongoDB URI and `your_jwt_secret` with a secure secret string for JWT.

4. **Start the Servers:**
   - In the backend directory, run:
     ```bash
     npm start  # This starts the backend server
     ```
   - In the frontend directory, run:
     ```bash
     npm run dev  # This starts the Vite frontend server
     ```

5. **Access the Application:**
   - Open your browser and go to `http://localhost:5173` (default port for Vite) to access the frontend.
   - The backend will be running at `http://localhost:5000` (or whatever port you specify in your `.env` file).

6. **User Registration and Login:**
   - Navigate to the registration page to create a new account.
   - After registration, log in using your credentials to access the dashboard.

## Usage

- **Adding Income/Expenses**: Use the provided forms to enter your income and expenses. These entries will be displayed in a list.
- **Visualizing Data**: View charts that represent your income and expenses over time.
- **Deleting Entries**: Click on the delete button next to an entry to remove it.

## Notes

- Ensure MongoDB is running locally or that you have a valid MongoDB Atlas connection.
- If you encounter CORS issues, make sure to configure your backend to allow requests from the client URL.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features.






