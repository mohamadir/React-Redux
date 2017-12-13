    import React, { Component } from 'react';
    import axios from 'axios';
    import {createStore,applyMiddleware} from 'redux';
    import * as Constants from './Constants';
    import logger from 'redux-logger';
    import thunk from 'redux-thunk';
    const initialState={
        fetching: false,
        fetched: false,
        error: null,
        members:[]
    }

    const reducer =  function(state=initialState,action){
        switch(action.type)
        {
            case "FETCH_START":
            return {...state,fetching:true};
            break;
            case "ERROR":
            return {...state,fetching:false,fetched:false,error:action.payload};
            break;
            case "RECIEVE":
            return {...state,fetching:false,fetched:true,members:action.payload};
        }
    }
    
    //Step 2 : Reducer : state , action



    // step 3 : Subscribe .
    const store = createStore(reducer, applyMiddleware(thunk, logger))
    store.dispatch((dispatch)=>{
        dispatch({type:"FETCH_START"});
        axios.get("http://dev.snapgroup.co.il/api/members/getallmembers").then((res)=>{
            dispatch({type:"RECIEVE",payload:res});
        }).catch((err)=>{
            dispatch({type:"ERROR",payload:err}); 
        });
        
    });
   
    class ReduxDemo extends Component {
        
        render() {

        // step 1 Store : reduce and state
       

        return (
                <div>

                </div>
            )
        }
    }
    export default ReduxDemo;