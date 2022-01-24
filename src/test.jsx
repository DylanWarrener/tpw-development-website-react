import React from 'react';

import './test.scss';

export default function Test() {

    const NAVIGATION_DATA = {}

    const NAV_TITLES = [
        "home", 
        "kitchens", 
        "bathrooms", 
        "newbuilds", 
        "extensions", 
        "refurbishments",
        "about",
        "contact"
    ];
    
    NAV_TITLES.forEach((title, index) => {
        NAVIGATION_DATA[title] = {
            "id": index,
            "title": title.toUpperCase(),
            "routeName": (title === "home") ? "/" : title.toLowerCase()
        }
    });
    
    console.log("The dictionary ", NAVIGATION_DATA);

    Object.keys(NAVIGATION_DATA).map((key, index) => {
        console.log("Title: ", NAVIGATION_DATA[key].title);
    })

    console.log(NAVIGATION_DATA.home.routeName);

    /* 
    const NAV_DATA_DICT = {
        "Home": {
            "id": 0,
            "title": 'HOME',
            "routeName": 'home'
        }
    }; 
    */

    /* 
    const NAV_DATA_ARRAY = [
        { "Home": {
            "id": 0,
            "title": 'HOME',
            "routeName": 'home'
        }}
    ]; 
    */

    //console.log("Nav array: " + NAV_DATA_ARRAY);
    //console.log("Nav dictionary: " + NAV_DATA_DICT.home);

    /* NAV_DATA_ARRAY.push(title[{
        "id": index,
        "title": title.toUpperCase(),
        "routeName": title.toLowerCase()
    }]) */

    return (
        <div>
            Test
        </div>
    );
}

/* 
 const ARRAY = [
     'Home': {
         id: 0,
         title: 'Home'
         routeName: 'home'
     }
 ]
*/