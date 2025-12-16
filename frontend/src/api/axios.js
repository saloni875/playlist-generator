export const getAccessToken = () => {
  return localStorage.getItem("spotify_access");
};

export const fetchSpotifyProfile = async () => {
  const token = getAccessToken();

  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });



  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
};

const SPOTIFY_BASE = "https://api.spotify.com/v1";

const getToken = () => localStorage.getItem("spotify_access");

export const searchSpotifyTracks = async (query) => {
  const res = await fetch(
    `${SPOTIFY_BASE}/search?q=${encodeURIComponent(query)}&type=track&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Spotify search failed");
  }

  return res.json();
};

