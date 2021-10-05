let APIURL = ""


switch (window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4500';
        break;
    case 'hyperspace-sm.herokuapp.com':
        APIURL = 'https://hyperspace-server-rb.herokuapp.com'
}

export default APIURL