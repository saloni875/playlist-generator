import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SpotifyCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(" CALLBACK PAGE HIT");

    const params = new URLSearchParams(window.location.search);
    const access = params.get("access");
    const refresh = params.get("refresh");

    console.log("access:", access);
    console.log("refresh:", refresh);

    if (!access) {
      navigate("/", { replace: true });
      return;
    }

    localStorage.setItem("spotify_access", access);
    localStorage.setItem("spotify_refresh", refresh);

    navigate("/dashboard", { replace: true });
  }, []);

  return <p>Connecting to Spotify…</p>;
}
