# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# login 
In this project we have used exclusive UI for the LogIn page, We have added animation to the page by providing linear gradiant in which colors are changing dynamically and also we ahave integrated backend to the project and thereby we are checking the user passed data and comparing with he data that we have store in our MongoDB database.If the user exits and the password entered by the user matches with the password saves in the DB then we are directing to Home page else we are giving proper error to the user.

`express` - for acting as api for the service between the frontend and the backend.
`mongoose` - library for interacting with the mongodb database
`cors` - for handling the cross origin requests between the client and the server.
`axios` - we have used the axios at the frontend to fetch the backend api and give the frontend response at the client.

# signup
In this project we have used exclusive UI for the SignUP page, We have added animation to the page by providing linear gradiant in which colors are changing dynamically same as login page and also we ahave integrated backend to the project and thereby we are checking the user passed data and comparing with he data that we have store in our MongoDB database.If the user with the given mail already exits then we are giving proper error to the user else if all the credentials are entered as expected then we are directing to login the user.
`express` - for acting as api for the service between the frontend and the backend.
`mongoose` - library for interacting with the mongodb database
`cors` - for handling the cross origin requests between the client and the server.
`axios` - we have used the axios at the frontend to fetch the backend api and give the frontend response at the client.

# home 
In the home page we have made very interective UI . we have added carousel and we have uses card as a react components and tried to impelemt the component reusability as far as possible.

`react-bootsratp` - for integrating the bootstrap with the react.
`react-bootstrapbootstrap` - for intergating the carousel with the project
 we have handled at the navbar whether the user is logged in or not aand based on that we are showing the login and the logout button.

 # courses -
 in the cousrses we have fetched the different courses in the project through the api named as `rapid-api`, and fetching through the js `fetch` function  and showing all the videos in the project . In the courses pages we are showing the different courses and when the user clicks on the course we are directing the user to the requested course and fetching the api for the requested course and displaying all the courses . This is the project we have handled the api at the maximum level.

 # about 
 When the user is clicking at the about button on the home page we are redirecting the user to about page an describing the user about our organisation .

 # contact -
 the user can can contact us and pass out his query and its query we are storing at the backend in the mongodb database .


 # different hooks added to the project
 `useState` - hook for handling the state of the variables used in the project.
 `useEffect` - for calling out the functions at the loading of the page itself and on the change of the dependencies
 `useNavigate`  - for navigating through the routers

`createBrowserRouter` imported from `react-router-dom` for addding the router to the project.

`iframe` - for displaying the video.
