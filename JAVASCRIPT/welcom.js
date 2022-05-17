

const client_id = import.meta.env.VITE_CLIENT_ID;
const redirect_uri = "http://localhost:3000/";

const scope = "user-read-private user-read-email";

let url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(client_id);
url += "&scope=" + encodeURIComponent(scope);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
 
const link = document.createElement("a");

link.href = url;

const signSpotify = document.createElement("button");

signSpotify.textContent = "Sing into Spotify";
signSpotify.classList = "spotifyLog";

link.appendChild(signSpotify);
document.body.appendChild(link);
