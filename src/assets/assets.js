// Socials
import Facebook from './static/socials/Facebook.svg';
import Whatsapp from './static/socials/Whatsapp.svg';

// Logo
import Logo from './static/logo/logo.svg';

// Icons black color
import PhoneBlack from './static/icons/phone-black.svg';
import EmailBlack from './static/icons/email-black.svg';
import TimeBlack from './static/icons/time-black.svg';
import LocationBlack from './static/icons/location-black.svg';

// Icons accent
import PhoneAccent from './static/icons/phone-accent.svg';
import EmailAccent from './static/icons/email-accent.svg';
import TimeAccent from './static/icons/time-accent.svg';
import LocationAccent from './static/icons/location-accent.svg';

// Icons transparent 
import ArrowUp from './static/icons/arrow-up.svg';

// Images
import HomeLandingPage from './static/temp/home.jpg';

import KitchenLandingPage from './static/temp/kitchen.jpg';
import KitchenFirstJob from './static/temp/first-job.jpg';

import BathroomLandingPage from './static/temp/bathroom.jpg';

import NewBuildLandingPage from './static/temp/newbuild.jpg';

import ExtensionLandingPage from './static/temp/extension.jpg';

import RefurbishmentLandingPage from './static/temp/refurbishment.jpg';

import AboutLandingPage from './static/temp/about.jpg';

const assetsObject = {
    socials: {
        facebook: Facebook,
        whatsapp: Whatsapp
    },
    logo: Logo,
    icons: {
        black: {
            phone: PhoneBlack,
            email: EmailBlack,
            time: TimeBlack,
            location: LocationBlack
        },
        normal: {
            phone: PhoneAccent,
            email: EmailAccent,
            time: TimeAccent,
            location: LocationAccent
        },
        transparent: {
            arrowUp: ArrowUp
        }
    }, 
    images: {
        home: {
            landingPage: HomeLandingPage
        },
        kitchen: {
            landingPage: KitchenLandingPage,
            firstJob: KitchenFirstJob
        },
        bathroom: {
            landingPage: BathroomLandingPage
        },
        newbuild: {
            landingPage: NewBuildLandingPage
        },
        extension: {
            landingPage: ExtensionLandingPage
        },
        refurbishment: {
            landingPage: RefurbishmentLandingPage
        },
        about: {
            landingPage: AboutLandingPage
        }
    }
};

export default assetsObject;