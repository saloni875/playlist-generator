import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const login = (req, res) => {
  console.log(" /auth/login HIT");
  const scope = [
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
  ].join(" ");

  const authURL =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
      response_type: "code",
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      show_dialog: "true",
    });

  res.redirect(authURL);
};

export const callback = async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
      
    );

    const { access_token, refresh_token } = response.data;

    // Redirect to frontend with tokens
    const redirectUrl = `${process.env.FRONTEND_URL}/callback?access=${access_token}&refresh=${refresh_token}`;

    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Spotify Auth Error:", error.response?.data || error.message);
    res.status(500).send("Authentication Failed");
  }
};
