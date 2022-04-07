import { geocode } from './geo-opencage';

/**
 * Try everything we can possibly think of to determine 
 * "home" (the starting latitude/longitude) of the map.
 * 
 * It tries these things:
 *   1. If 'home' is passed as a query parameter, use it as an address
 *   2. Use browser geolocation if the user will allow it
 *   3. Use REACT_APP_HOME_LAT_LNG if defined in .env
 *   4. Else use Plaça Catalunya as the last resort
 **/

// Location of Plaça Catalunya as "last resort"
const PLACA_CATALUNYA = [41.3874877, 2.1680296];

// Enable (or not) console logging
const DEBUG = true;


/**
 * Return [latitude, longitude] to use as the user's location ("home")
 **/

async function getHome() {
    // Check for 'home' query param
    let params = new URLSearchParams(window.location.search);  // parse query params
    if (params.has('home')) {
        let response = await geocode(params.get('home'));
        if (response.ok && response.data.latLng) {
            if (DEBUG) {
                console.log('geoloc: query parameter:', params.get('home'), response.data);
            }
            return response.data.latLng;
        }
    }

    // Else try browser geolocation
    try {
        let opts = { timeout: 2000 };
        let geoPos = await _asyncGetCurrentPosition(opts);
        let { latitude, longitude } = geoPos.coords;
        if (DEBUG) {
            console.log('geoloc: browser location:', latitude, longitude);
        }
        return [latitude, longitude];
    } catch (err) {
        console.log('geoloc: error:', err);
    }

    // Else try REACT_APP_HOME_LAT_LNG in .env
    if ('REACT_APP_HOME_LAT_LNG' in process.env) {
        if (DEBUG) {
            console.log('geoloc: HOME_LAT_LNG in .env:', process.env.REACT_APP_HOME_LAT_LNG);
        }
        return process.env.REACT_APP_HOME_LAT_LNG.split(',');
    }

    // Else Plaça Catalunya ;-)
    if (DEBUG) {
        console.log('geoloc: "last resort": Plaça Catalunya');
    }
    return PLACA_CATALUNYA;
}

// Use a promise-based wrapper for (callback-based) browser geolocation function
async function _asyncGetCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            // This is the JS function that actually gets the browser location
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        } else {
            reject( Error('Browser does not support geolocation') );
        }
    });
}

export { getHome };