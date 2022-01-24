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

const NAVIGATIONAL_DATA = {}
NAV_TITLES.forEach((title, index, arr) => {
    NAVIGATIONAL_DATA[title] = {
        "id": index,
        "title": title.toUpperCase(),
        "routeName": (title === "home") ? "/" : title.toLowerCase()
    }
});

export default NAVIGATIONAL_DATA;