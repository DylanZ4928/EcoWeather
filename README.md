# ECOWEATHER

Ecoweather is the capstone project for the Informatics major and the Computing and Software Systems major in the BSc at The University of Melbourne.

The aim of the project is to design an interactive web app for elderly people with information regarding the native wildlife of Australia to help enrich their day-to-day life.

The project is built upon the MERN stack framework, using React.js for frontend (client-side) development, Node.js + Express.js for backend (server-side) development and MongoDB as the database.

## Table of Contents

- [About](#about)
- [Contributors](#contributors)
- [Background](#background)
  - [App Criteria](#app-criteria)
  - [Additional Features](#additional-features)
  - [Documentation](#documentation)
- [Installation](#installation)
- [Deployment](#deployed-version)

## Contributors:

|    Role    | GitHub Username |      Name       |
| :--------: | :-------------: | :-------------: |
| Supervisor |  AAAALEX-XIANG  |   Alex Xiang    |
|  Student   |   DylanZ4928    |   Dylan Zhang   |
|  Student   |   anxiousalsa   | Andre Soetrisno |
|  Student   |      BZUOM      |   Barry Zhong   |
|  Student   |    channer72    |  Temi Oludare   |
|  Student   |   nstammbach    | Noah Stammbach  |

## Background

### App Criteria

- Fun and easy to use
- Cross Platform
- Needs to have user interaction
- Show the weather in Melbourne
- Give information about Australian animals
- Not text heavy

### Additional Features

- Login / Registration feature
- Ability to change the location of the weather data
- Ability to add events to a calendar
- Self maintaining integration (Automation of event deletion, etc.)

### Documentation
- [System Sequence Diagrams](/Documentation/System%20Sequence%20Diagrams)
- [Images](/frontend/src/pages/images)
- [Animals](/frontend/src/pages/media)
- [Backend Routes (In the README)](/backend)
- [Testing](/Testing)
- [User Stories](/Documentation)

### External APIs used
- [OpenWeatherMap.org](https://openweathermap.org/api)
  - [OpenWeatherMap Cities](https://github.com/manifestinteractive/openweathermap-cities/blob/master/README.md)

### Dependencies used
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [connect-mongo](https://www.npmjs.com/package/connect-mongo)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [method-override](https://www.npmjs.com/package/method-override)
- [mongoclient](https://www.npmjs.com/package/mongoclient)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [morgan](https://www.npmjs.com/package/morgan)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [passport](https://www.npmjs.com/package/passport)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [q](https://www.npmjs.com/package/q)
- [request](https://www.npmjs.com/package/request)
- [jest-dom](https://www.npmjs.com/package/jest-dom)
- [react](https://www.npmjs.com/package/react)
- [user-event](https://www.npmjs.com/package/user-event)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [web-vitals](https://www.npmjs.com/package/web-vitals)

## Installation

To install and setup in a local envrionment:

1. Clone the repository
2. `cd` into the **Backend** directory, deleting the existing _node_modules_ directory and re-installing using `npm install`
3. Return the parent directory with `cd ..`
4. Now `cd` into the **Frontend** directory, deleting the existing _node_modules_ directory and re-installing using `npm install`
5. Return the parent directory with `cd ..`
6. Delete the existing _node_modules_ directory and re-instll using `npm install`

To run both the app and the server, go to the root directory and run: `npm run dev`

To run the server individually, `cd` into the **Backend** directory and run: `npm  run dev`

To run the react app individually, `cd` into the **Frontend** directory and run: `npm start`

## Deployed version

[Heroku Deployment](https://maverick-app-test-1.herokuapp.com/)

