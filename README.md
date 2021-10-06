# Skalavel JS Template

A simple skalavel/js without babel template.

## Getting started

See the next steps to create your application with skalavel and javascript:

```sh
mkdir -p ~/repo
cd !$
git clone https://github.com/AlphaTechnolog/skalavel-js-template my-awesome-skalavel-app
cd !$
```

Now install the requirements with yarn or npm:

```sh
npm install
# or with yarn
yarn
```

## Running the app

First copy the `.env.example` file to `.env`

```sh
cp -r ./.env.example ./.env
```

The `.env` contains this:

```
PORT=3000
```

Now, run the app:

```sh
npm start
# or with yarn
yarn start
```

It run the app in the port `3000`, open it in your browser!

## Running the app (for development)

To run the app for development use the `dev` command it uses `nodemon` to apply the hot reloading.

```sh
npm run dev
# or with yarn
yarn dev
```