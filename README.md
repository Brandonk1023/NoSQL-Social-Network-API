# NoSQL-Social-Network-API

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

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

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

MIT License