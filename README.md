# Meta-Perverse

![](https://i.imgur.com/jKmKugF.png)

Working in a team to product a social media platform. Week 8 and 9 of Makers Academy.

By [Coral Baker](https://github.com/Coral-Ann), [David Ewan Campbell](https://github.com/Ramble-Tamble-70), [Conor Hope](https://github.com/Conor-Developer), [Jordan Manu](https://github.com/JordanManu), [Alexis Morcrette](https://github.com/almorcrette), [Rupert Pople](https://github.com/rupertpople) and [Ruzeka Uddin](https://github.com/R552-beep).

## Take a look!

[Visit our live app](https://acebook-metaperverse.herokuapp.com/)

## Goal of the project

Use high-quality processes to build a project in a team.

## Tech stack

- [MongoDB](https://www.mongodb.com/) for the database.
- [Node.js](https://nodejs.org/en/) for runtime JavaScript.
- [Express](https://expressjs.com/) web framework for Node.js.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for DB hosting.
- [Heroko](https://www.heroku.com/what) for hosting for deployment.
- [MongoDB Compass](https://www.mongodb.com/products/compass) for DB GUI.
- [Trello](https://trello.com) for agile development.
- [Discord](https://discord.com/) for team working and pair programming
- [Easy Retro](https://easyretro.io/) for team retrospectives.
- [Github](https://github.com/) and Git for version control.

## Feature Requirements

Authentification
- Users can sign up
- No duplicate sign-up accounts
- Passwords are encrpyted
- Users can sign in
- Easy session navigation 

Posts:
- User can make posts
- Posts appear with newest post first
- Posts show dates they were created
- Posts show who made them
- Posts can be liked and number of likes is visible next to the post
- Posts can have multiple lines
- Users can delete their posts

Comments
- Users can add comments to posts

UX
- Delightful user experience

Usability and Reliability
- Data stored in dabase
- Dynamic front-end reducing number of server requests

Development:
- Continuous integration
- Continuous deployment

## Getting started

To explore the codebase follow this set-up:

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Install Node.js dependencies
   ```
   npm install
   ```
2. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
3. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@4.4
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@4.4 first in your PATH, run:`, follow the instruction and run the following command.
4. Start MongoDB
   ```
   brew services start mongodb-community@4.4
   ```

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

### Test

#### Start test server

The server must be running locally with test configuration for the integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database, so that integration tests do not interact with the development server.

### Run tests

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```

### MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`
- Try swapping `localhost`, everywhere that it appears in your codebase, with `127.0.0.1`. It might be surprising but this does sometimes make a difference.

If you have issues that are not resolved by these tips, please reach out to a coach and, once the issue is resolved, we can add a new tip!

`git clone path-to-your-repo`
`command_to_install_dependencies` (e.g. `bundle`)

### Licence

[See here]('/LICENSE')
