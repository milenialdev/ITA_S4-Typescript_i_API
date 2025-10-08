

# ITA_S4-Typescript_i_API

Sample project in TypeScript that implements several API's with controllers to fetch jokes and weather data, using Vite for development and Vitest for testing. The project is structured into modules for services, controllers, utilities, and application state.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have installed:

```
Node.js >= 18.x
npm >= 9.x
```

### Installing

Clone the repository and enter the project folder:

```
git clone https://github.com/milenialdev/ITA_S4-Typescript_i_API.git
cd ITA_S4-Typescript_i_API
```

Install dependencies:

```
npm install
```

To start the development server:

```
npm run dev
```


You can access the app at `http://localhost:5173` (or the port Vite indicates).

## Folder Structure

The project is organized into several main folders:

- `src/`: Contains the main application code, including services, utilities, types, and styles.
- `controllers/`: API controllers for handling requests and responses.
- `state/`: Application state management.
- `build/`: Compiled output after building the project.
- `public/`: Static assets and the main HTML file.
- `tests/`: Automated tests for services and utilities, organized by module.

This structure helps keep code modular and maintainable, separating logic by responsibility.

## Running the tests

To run automated tests:

```
npm run test
```

Tests are organized by module in the `tests/` folder. For example, joke and weather services have their own test files:

```
tests/services/chuckService.test.ts
tests/services/weatherService.test.ts
```

These tests verify correct data fetching from external APIs and error handling.

You can run the linter to check code style:

```
npm run lint
```

## Deployment

To deploy the project to production, build the app:

```
npm run build
```

The result will be in the `build/` folder. You can serve these static files with any web server.

## Built With

* [Vite](https://vitejs.dev/) - Development and build tool
* [TypeScript](https://www.typescriptlang.org/) - Main language
* [Vitest](https://vitest.dev/) - Testing

## Authors

* **Carlos Benito** - [milenialdev](https://github.com/milenialdev)

## Acknowledgments

* Special thanks to the contributors to the public API's used in this project:
* https://icanhazdadjoke.com/
* https://api.open-meteo.com/
* https://api.chucknorris.io/

* And special thanks to Billie Thompson for her template to make a good Readme:
* **Billie Thompson** - [PurpleBooth](https://github.com/PurpleBooth)


## Pending improvements

* Add testing for the `main.ts` file.
