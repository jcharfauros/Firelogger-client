let APIURL = "";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "lmsj-firelogger-client.herokuapp.com":
    APIURL = "https://firelogger.herokuapp.com";
}

export default APIURL;
