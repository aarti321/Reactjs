# Getting Started with Create React App

This ReactJS application (built with TypeScript) fetches and displays blog posts from a Laravel backend API. Users can view a list of blog posts and click on individual posts for a detailed vie
(https://github.com/aarti321/Reactjs.git).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Steps to Setup and Run the Frontend:

1. **Clone the ReactJS repository**:
    
    git clone https://github.com/aarti321/Reactjs.git
    cd react-blog-app
    

2. **Install dependencies**:
    
    npm install
    


3. **Run the React development server**:
    
    npm start
   

The frontend will now be running on `http://localhost:3000`.



## Features

- **Blog List Page**: Displays a list of blog posts retrieved from the backend API.
- **Blog Detail Page**: Shows the content of a selected blog post.
- **API Integration**: Fetches data from the Laravel backend.



## Challenges

- **Cross-Origin Resource Sharing (CORS)**: Configured CORS in Laravel to allow communication between the frontend and backend.
- **Data Fetching**: Handled API calls using `axios` and managed state with React

