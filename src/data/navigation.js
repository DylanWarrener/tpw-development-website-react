const NAV_TITLES = ["Home", "About", "Location", "Expertise", "Portfolio", "Contact"];

const NAV_DATA = [];
for(let i = 0; i < NAV_TITLES.length; i++) {
    NAV_DATA.push({
        "id": i,
        "name": NAV_TITLES[i],
        "routeName": (NAV_TITLES[i] === "Home") ? "/" : NAV_TITLES[i].toLowerCase()
    });
}

export default NAV_DATA;