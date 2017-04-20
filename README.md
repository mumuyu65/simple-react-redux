[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

For beginners like me to learn the concepts in [Redux](https://github.com/rackt/redux)

Can it be simpler? send a pull request

To run this example:

1. [Download this repo](https://github.com/jackielii/simplest-redux-example/archive/master.zip) or `git clone https://github.com/jackielii/simplest-redux-example.git`
2. From the repo folder run:  
   `npm install`
3. `npm start`
4. open [http://localhost:8000/](http://localhost:8000/) in the browser

And also head over to http://redux.js.org/ for some great documentation.

There is also a [webpack](https://github.com/jackielii/simplest-redux-example/tree/webpack) and an [ES5](https://github.com/jackielii/simplest-redux-example/tree/es5) example.

explains:
1. actions/: actions to be dispatched.
2. components/: shown component(this is the container details).
3. containers/: container component(this is the container box).
4. apis/: to be reserve.(this is about the server)
5. images: all images are placed here.
6. service : store all datas form server.
7. reducers: accept the actions from 'actions/*'.
8. styles: all sass/scss/css/less files are placed here.