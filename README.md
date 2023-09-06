# GitHub User Search and Repository Viewer

![GitHub User Search and Repository Viewer](github-logo.png)

## Description

This React application integrates with the GitHub API to allow users to search for up to 5 GitHub users with usernames similar to the value entered in a text input field. Upon selecting a user, the application displays their repositories with no limit on the number of repositories displayed.

## Features

- **User Search**: Users can enter a partial or full GitHub username into the search input to find users matching the input value.

- **User Selection**: Up to 5 matching users are displayed as search results. Users can click on a result to view the selected user's repositories.

- **Repository Display**: The application fetches and displays all repositories for the selected user with details like the repository name, description, and URL.

## Technologies Used

- React: A JavaScript library for building user interfaces.

- TypeScript: A statically typed superset of JavaScript that enhances code quality and developer productivity.

- GitHub API: Used to fetch user information and repositories.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/enddyrama/atask-assignment.git
```

2. Navigate to the project directory:

```bash
cd atask-assignment
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

7. Open your browser and go to `http://localhost:3000` to use the application.

## Usage

1. Enter a GitHub username or a partial username into the search input.

2. The application will display up to 5 matching users.

3. Click on a user to view their repositories.

4. The repositories are displayed with details including name, description, and URL.

## API Documentation

For more information about the GitHub API used in this project, please refer to the [GitHub API documentation](https://developer.github.com/v3/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project or report any issues you encounter. Happy coding! 🚀