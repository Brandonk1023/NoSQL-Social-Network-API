# NoSQL-Social-Network-API

## Description

This application is a NoSQL social network API application.  The motivation behind this project was to practice and further develop my backend application skills.  This application also servers as a good demonstration and basis for the beginning of a social network/media application back end.  Working on this project allowed me to further my knowledge and hone my skills with using NoSQL technologies such as Mongoose, and MongoDB.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Walkthrough Video URL
https://youtu.be/0d5XTp2fMp0

## Installation

To start the API application,  the user will need to run the following command `npm i` for installing any needed dependencies, and then `npm start` for starting the application.  Once this has been done the user can navigate the API and use it's routes.  To see a demonstration of the API in action, please view the walkthrough video at the URL listed above.

## Usage

To use the application the User will navigate the API using the routes and sending JSON data.  The routes are listed below.

### GET:
To get all users or thoughts use the following route:
`http://localhost:3001/api/` and add `users` or `thoughts` to the end to access the data.

To get a specific user or thought use the following route:
`http://localhost:3001/api/ {enter users or thoughts here} / { enter user or thought ID here}`

### POST:
To create a user:
`http://localhost:3001/api/users`

To create a thought:
`http://localhost:3001/api/thoughts`

To add a friend:
`http://localhost:3001/api/users/ {enter user ID here} /friends/ {enter friend's user ID here}`

To add a reaction:
`http://localhost:3001/api/thoughts/ {enter thought ID here} /reactions`

### PUT:
To update a user:
`http://localhost:3001/api/users/ {enter user ID here}`

To update a thought:
`http://localhost:3001/api/thoughts/ {enter thought ID here}`

### DELETE:
To delete a user:
`http://localhost:3001/api/users/ {enter user ID here}`

To delete a thought:
`http://localhost:3001/api/thoughts/ {enter thought ID here}`

To delete a friend:
`http://localhost:3001/api/users/ {enter user ID here} /friends/ {enter friend's user ID here}`

To delete a reaction:
`http://localhost:3001/api/thoughts/ {enter thought ID here} /reactions/ {enter reaction ID here}`


![API Screenshot](assets\APIscreenshot.jpg)

## Credits

MongoDB Documentation:
https://www.mongodb.com/docs/

Mongoose Documentation:
https://mongoosejs.com/docs/



## License

MIT License