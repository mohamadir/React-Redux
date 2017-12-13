import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware,combineReducers,createStore } from 'redux';

const error = (store)=>(next)=>(action) => {
	console.log("action fired",action);
	try{
	next(action);
	}
	catch(e)
	{
		console.log("AAAH!!",e);
	}
}
const middleware = applyMiddleware();
const reducer =function(state={user:'us',password:'ps',authinticated:false},action){
	if(action.type=="ath")
		return {...state,user: action.payload.user,password: action.payload.password,authinticated: action.payload.authinticated};
	return state;
}

const store= createStore(reducer);
store.subscribe(()=>{
	console.log(store.getState());
});
ReactDOM.render(
	<Provider store={store}>
 			<App   />
	</Provider>
  ,
  document.getElementById('root')
);
