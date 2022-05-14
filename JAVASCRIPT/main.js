/*const APIController = (function () {
  const clientId = "d5cb1a5cfd304e1daad3362fb3b231e5";
  const clientSecret = "92090381e11845c2ab551eb6fac53368";

  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic" + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
  };

  const _getTrack = async (BQD7XEZQkBWyIldQrfTaU8onsJQZO-4fo5dSRGg8CrnNNfGgoBd_Mt_1P4E3kojDCM8U4VEvjd-pDHqR8imrXeee74fHmP78IXTQXWQO5mhUggfRa7o9aFroMvHWKJeeSy-eTLa617f_y3E, https://api.spotify.com/v1/tracks/{id}
) => {
    const result = await fetch(`${https://api.spotify.com/v1/tracks/{id}
}`, {
      method: "GET",
      headers: { Authorization: "Bearer" + token },
    });

    const data = await result.json();
    return data;
  };

  return {
    getTrack(BQD7XEZQkBWyIldQrfTaU8onsJQZO-4fo5dSRGg8CrnNNfGgoBd_Mt_1P4E3kojDCM8U4VEvjd-pDHqR8imrXeee74fHmP78IXTQXWQO5mhUggfRa7o9aFroMvHWKJeeSy-eTLa617f_y3E, https://api.spotify.com/v1/tracks/{id}
) {
      return _getTrack(BQD7XEZQkBWyIldQrfTaU8onsJQZO-4fo5dSRGg8CrnNNfGgoBd_Mt_1P4E3kojDCM8U4VEvjd-pDHqR8imrXeee74fHmP78IXTQXWQO5mhUggfRa7o9aFroMvHWKJeeSy-eTLa617f_y3E, trackEndPoint);
    },
  };
})(); */
