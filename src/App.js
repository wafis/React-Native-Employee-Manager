import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import Router from "./Router";
import ReduxThunk from "redux-thunk";
import LoginForm from "./components/LoginForm";

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyDQNMlZiokqZB43lbBSu_0IiqRmWqcnCyk",
			authDomain: "manager-e2fb4.firebaseapp.com",
			databaseURL: "https://manager-e2fb4.firebaseio.com",
			projectId: "manager-e2fb4",
			storageBucket: "manager-e2fb4.appspot.com",
			messagingSenderId: "282124793835"
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
