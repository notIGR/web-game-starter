import SpotifyWebApi from "spotify-web-api-node";

const clientId = "d5cb1a5cfd304e1daad3362fb3b231e5";
const clientSecret = "92090381e11845c2ab551eb6fac53368";
const redirectUri = "http://localhost:3000/play";

// const spotifyApi = new SpotifyWebApi()

var spotifyApi = new SpotifyWebApi({
	clientId: clientId,
	clientSecret: clientSecret,
	redirectUri: redirectUri
});

// spotifyApi.setCredentials({
// 	clientId,
// 	redirectUri
// });
const scopes = ["user-read-private", "user-read-email"],
	state = "some-state-of-my-choice",
	showDialog = true,
	responseType = "token";
console.log(spotifyApi);
// Create the authorization URL
const authorizeURL = spotifyApi.createAuthorizeURL(
	scopes,
	state,
	showDialog,
	responseType
);
// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true
console.log(authorizeURL);

/*spotifyApi.getAlbum("2Kvny1npUeYfmtmTxPCgbV")
	.then(function(data) {
		console.log("Album Info", data.body);
	},
	function (err) {
		console.error(err);
	}
	);
*/