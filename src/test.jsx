import React from 'react';

import NAVIGATION_DATA from './data/navigation';

export default function Test() {
    const NAV = [
        "Home", 
        "About", 
        "Location", 
        "Expertise",
        "Portfolio", 
        "Contact"
    ];

    console.log(NAV);

    /*
    const array = [];
    for(let i = 0; i < NAV.length; i++) {
        array.push({ 
            "id": i,
            "name": NAV[i],
            "routeName": NAV[i].toLowerCase()
        });
        if(NAV[i] === "Expertise") {
            NAV[i].add({
                "items": []
            })
        }
    }
    */

    return (
        <div>
            
        </div>
    );
}