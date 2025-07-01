# Teamflicks

An online movie streaming website built with React for the frontend and Node.js with Express.js for the backend, utilizing MongoDB for the database.

## Key Features & Benefits

*   **User Authentication:** Secure signup, login, and authentication using JWT.
*   **Movie Streaming:** Browse and watch a wide selection of movies.
*   **Genre-Based Filtering:** Easily find movies by specific genres.
*   **Admin Panel:**  Admin functionality to add, edit, and remove movies.
*   **Responsive Design:**  Optimized viewing experience across various devices.
*   **Support System:** A support request system for users to report issues or request assistance.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:** (v14 or higher)
*   **npm:** (Node Package Manager) or **yarn:**
*   **MongoDB:**  A running MongoDB instance.
*   **React:** (Frontend)
*   **Express.js:** (Backend)

## Installation & Setup Instructions

Follow these steps to get the project up and running:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/A-fawzy05/Teamflicks.git
    cd Teamflicks
    ```

2.  **Navigate to the Backend directory:**

    ```bash
    cd Backend
    ```

3.  **Install backend dependencies:**

    ```bash
    npm install  # or yarn install
    ```

4.  **Configure environment variables:**

    Create a `.env` file in the `Backend` directory and add the following:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000 # Or any port you prefer
    ```

    *Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_jwt_secret_key` with a secure secret key.*

5.  **Start the backend server:**

    ```bash
    npm run start # or yarn start
    ```

6.  **Navigate to the Frontend directory:**

    ```bash
    cd ../
    ```
    ```bash
    cd src/
    ```
    ```bash
    cd ../
    ```

7.  **Install frontend dependencies:**

    ```bash
    npm install  # or yarn install
    ```

8.  **Configure API endpoint:**
    Modify `src/api.jsx` and ensure the `baseURL` is set to your backend server address (e.g., `http://localhost:5000`).

9.  **Start the frontend application:**

    ```bash
    npm run dev  # or yarn dev  (depending on your vite configuration)
    ```

## Usage Examples & API Documentation

### Frontend

The frontend is built with React and uses Material UI and Swiper for a rich user interface. The `src` directory contains the main components, pages, and assets.

*   `src/App.jsx`: Main application component.
*   `src/components`: Contains reusable components like `MovieCard`, `Navbar`, `Footer`, etc.
*   `src/pages`: Contains different pages such as `Home`, `Login`, `Signup`, `MoviesPage`, etc.
*   `src/api.jsx`: Contains the API configuration for communicating with the backend.

### Backend API Endpoints

The backend provides the following API endpoints:

**User Authentication:**

*   `POST /api/users/signup`: Registers a new user. Requires `username`, `email`, and `password`.
*   `POST /api/users/login`: Logs in an existing user. Requires `email` and `password`.
*   `GET /api/users/profile`: Gets the user profile (requires authentication token).

**Movie Management (Admin only):**

*   `POST /api/movies`: Adds a new movie (requires admin authentication).
*   `GET /api/movies`: Gets all movies.
*   `GET /api/movies/:id`: Gets a specific movie by ID.
*   `PUT /api/movies/:id`: Updates a movie (requires admin authentication).
*   `DELETE /api/movies/:id`: Deletes a movie (requires admin authentication).
*   `GET /api/movies/genre/:genre`: Gets movies by genre.

**Support Requests:**

*   `POST /api/support`: Creates a new support request.
*   `GET /api/support`: Retrieves all support requests.

**Example (Fetching Movies):**

```javascript
import api from './api';

async function fetchMovies() {
  try {
    const response = await api.get('/movies');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchMovies();
```

## Configuration Options

*   **Environment Variables:**  The application uses environment variables for sensitive information like the MongoDB connection string and JWT secret. Ensure these are properly configured in the `.env` file.
*   **Port Configuration:** The backend server port can be configured using the `PORT` environment variable.

## Contributing Guidelines

We welcome contributions to Teamflicks!  To contribute, follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your branch to your forked repository.
5.  Create a pull request to the main repository.

Please adhere to the existing code style and conventions.

## License Information

This project has no license specified. As such, all rights are reserved by the owner.

## Acknowledgments

*   Material UI: For providing a comprehensive set of UI components.
*   Swiper:  For the excellent slider/swiper component.
*   Other open-source libraries and resources used in the project.
