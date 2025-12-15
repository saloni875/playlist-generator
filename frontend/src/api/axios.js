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
