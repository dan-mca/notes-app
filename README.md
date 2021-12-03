# Memo notes app

Memo is a notes app built using MERN stack with Firebase used for authentication designed for mobile and desktop. Users can register, login and create notes and delete notes

## Getting Started

1. The Memo app can be accessed here
2. An email and password can be registered or the below demo account details can be used that contains sample notes

## Screenshots 
![Home](https://raw.githubusercontent.com/dan-mca/notes-app/main/client/src/assets/images/home.png)
![Login](https://raw.githubusercontent.com/dan-mca/notes-app/main/client/src/assets/images/login.png)
![Notes](https://raw.githubusercontent.com/dan-mca/notes-app/main/client/src/assets/images/notes.png)

## Motivation
I made this alongside the [https://nology.io](nolog.io) development course to build upon the skills I had learnt and to take it further by creating a fullstack app using MERN. 

**MongoDB** - previously using Google Firebase, I wanted to use MongoDB to my experience due to its popularity and understanding a different system.

**Express and Node** - improve my understanding, practice of MVC design pattern and connecting with MongoDB rather than Google Firestore.

**React** - I extended my existing knowledge by adding private routes and persisting user authentication using Google Firebase.

As well as practicing core HTML, SASS, JavaScript skills I wanted to practice and improve accessibility, best practices and performance and tested this via Lighthouse.

## Build Status
The website and API functionally is complete. There are a few areas I would like to work on to further improve and practice:

- Extend login/register to allow third party authentication i.e. Google, Facebook, GitHub
- Create Swagger documentation for the notes API
- Add authentication to the API
- Functionality to allow the user to create tags with colours that change the default yellow note which can be searched and filtered on

## Built With
- React
- SASS
- Express
- Node
- MongoDB

## Usage
cd into the relevant directories i.e. notes-client and notes-server

### `npm start`

Runs the app in the development mode.\
[http://localhost:3000](http://localhost:3000) to view the app in the browser.\
[http://localhost:5000](http://localhost:5000/api) to access the api. This will need to be running to be able to retrieve, save and delete notes in the app.

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

## Contributions
Please fork the repository and use a feature branch if you would like to contribute. 

## Licence
The code in this project is licensed under MIT license.
