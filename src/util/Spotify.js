const Spotify = {
    clientId: '6165e9fdf0214f4db0d9ad220f111ecc',
    redirectUri: 'http://localhost:3000/callback',
    getUserId: async () => {
        const accessToken = Spotify.getAccessToken();
        const apiUrl = 'https://api.spotify.com/v1/me';
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.id;
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
        };
    },
    search: async (searchTerm) => {
        const accessToken = Spotify.getAccessToken();
        const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                if (jsonResponse.tracks) {
                    return jsonResponse.tracks.items.map((track) => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }));
                }
                return [];
            }
        } catch (error) {
            console.error('Error searching for tracks: ', error);
        }
    },
    createPlaylist: async (userId, playlistName) => {
        const accessToken = Spotify.getAccessToken();
        const apiUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };
        const data = JSON.stringify({
            name: playlistName,
            description: 'Custom playlist created with Jammming'
        });

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: headers,
                body: data
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.id;
            }
        } catch (error) {
            console.error('Error creating playlist: ', error);
        }
    },
    addTracksToPlaylist: async (userId, playlistId, trackUris) => {
        const accessToken = Spotify.getAccessToken();
        const apiUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };
        const data = JSON.stringify({
            uris: trackUris
        });

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: headers,
                body: data
            });

            if (response.ok) {
                console.log('Tracks added to the playlist successfully');
            }
        } catch (error) {
            console.error('Error adding tracks to the playlist: ', error);
        }
    }
}

Spotify.getAccessToken = () => {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    // console.log('access:' + accessTokenMatch);
    // console.log('expires:' + expiresInMatch);

    if (accessTokenMatch && expiresInMatch) {
        const accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);

        window.setTimeout(() => {
            window.history.pushState('Access Token', null, '/');
        }, expiresIn * 1000);

        return accessToken;
    } else {
        const redirectUrl = `https://accounts.spotify.com/authorize?client_id=${Spotify.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${Spotify.redirectUri}`;
        window.location.href = redirectUrl;
    }
}

export default Spotify;