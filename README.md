# Social API

A RESTful API built with Node.js and MongoDB to facilitate social interactions by managing users, thoughts, and reactions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Tests](#tests)
- [Questions](#questions)

## Features

- CRUD operations for Users and Thoughts.
- Add/Remove friends to/from a User's friend list.
- Add/Remove reactions to/from Thoughts.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary packages.
4. Ensure MongoDB is running on your machine.
5. Start the server by running `npm start`.

## Usage

After installation, navigate to [http://localhost:3000/api](http://localhost:3000/api) in your browser or Postman to access the API.

## Demo

Click on the link below to view the demo:

(https://watch.screencastify.com/v/S52aY6iUqWhHpFEJPiK2)

## API Endpoints

### Users
- `GET /api/users` - Retrieves all users.
- `GET /api/users/:userId` - Retrieves a single user by ID.
- `POST /api/users` - Creates a new user.
- `PUT /api/users/:userId` - Updates a user by ID.
- `DELETE /api/users/:userId` - Deletes a user by ID.
- `POST /api/users/:userId/friends/:friendId` - Adds a friend to the user's friend list.
- `DELETE /api/users/:userId/friends/:friendId` - Removes a friend from the user's friend list.

### Thoughts
- `GET /api/thoughts` - Retrieves all thoughts.
- `GET /api/thoughts/:thoughtId` - Retrieves a single thought by ID.
- `POST /api/thoughts` - Creates a new thought.
- `PUT /api/thoughts/:thoughtId` - Updates a thought by ID.
- `DELETE /api/thoughts/:thoughtId` - Deletes a thought by ID.
- `POST /api/thoughts/:thoughtId/reactions` - Adds a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Removes a reaction from a thought.

## License

MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

I'd like to thank the following people and projects for their contributions:

- **[BCS Code Files](https://github.com/Bucky24/class_temp_repo.git)**: The codebase leverages these fantastic open-source projects to deliver some features.
- **Vinnie Lopez**: For his code insights and documentation improvements.
- **Donna Casas Silvas**: For her support and insights around insomnia.

## Tests

Run `npm test` for tests.

## Questions

For more information, reach out to me at [myemail@example.com](mailto:myemail@example.com).
