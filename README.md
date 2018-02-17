# Goal Coach

A project for learning/exercise purposes with Redux and Firebase.

## Setting up Firebase

Log into [firebase.google.com](https://firebase.google.com/) and create a new project.
In your new project under `Add Firebase to your web app` you will find your Firebase config.

Create `firebase.js` in `/src` and paste your Firebase config (`apiKey`, `authDomain`, `databaseURL`... ) in the following:

```ruby
import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

export const firebaseApp =  firebase.initializeApp(config);
```

You can now launch the app in development mode by running:

```sh
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

For more information refer to Create React App documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
