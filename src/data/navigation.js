const NAV_TITLES = ["Home", "About", "Location", "Expertise", "Portfolio", "Contact"];

const NAV_DATA = [];
const set = {};
for(let i = 0; i < NAV_TITLES.length; i++) {
    if(NAV_TITLES[i] === "Expertise") {
        NAV_DATA.push({
            "id": i,
            "name": NAV_TITLES[i],
            "routeName": NAV_TITLES[i].toLowerCase(),
            "items": [
                "Kitchens",
                "Bathrooms"
            ]
        });
    } else {
        NAV_DATA.push({
            "id": i,
            "name": NAV_TITLES[i],
            "routeName": NAV_TITLES[i].toLowerCase()
        });
    }
}

export default NAV_DATA;