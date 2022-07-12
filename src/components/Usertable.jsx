// instal axios ---- npm install axios
// create services
// call services from component
// display table date

// import React from "react";

import React, { useEffect, useState } from "react";
import {UserService} from "../services/UserService";


let UserTable = () => {
   
    let [state, setState] = useState({
        users : []
    });

    useEffect( () => {
        UserService.getAllUsers()
                .then((response) => {
                    setState({
                        ...state,
                        users: response.data
                    })
                })
                .catch((error) => {
                    console.log(error)
                });
    }, )


    return (
        <>
        User Table
        <pre>{JSON.stringify(state.users)}</pre>
    </>
    )
   
};

export default UserTable;





/*
import React, { useEffect, useState } from "react";
import {UserSevice} from "../services/UserService";


let UserTable = () => {
    let [state, setState] = useState({
        users: []
    });

    useEffect( () => {
        UserSevice.getAllUsers().then((response) => {
            setState({
                ...state,
                users: response.data
            })
        }).catch((error) => {
            console.log(error);
        });
    }, [])


    return (
        <>
        User Table
        <pre>{JSON.stringify(state.users)}</pre>
    </>
    )
   
};

export default UserTable;
 */