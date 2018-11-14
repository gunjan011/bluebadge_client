let APIURL = '';

switch (window.location.hostname) {
    //LOCAL HOST NAME OF REACT APP
    case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3000';
    break;
    case 'poetry-frontend.herokuapp.com/':
    APIURL = 'https://poems-backend.herokuapp.com'
}
export default APIURL;