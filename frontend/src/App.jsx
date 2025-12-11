import { useState, useEffect } from "react";
function App() {

  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const access = params.get("access");
    const refresh = params.get("refresh");

    if (access) {
      setAccessToken(access);

      localStorage.setItem("spotify_access", access);

      localStorage.setItem("spotify_refresh", refresh);

      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  const loginSpotify = () => {
    window.location.href = "http://127.0.0.1:4000/auth/login";
  };
  
  return (
    <div style={{ padding: "20px", fontSize: "24px",color: "purple" }}>
      {accessToken ? (
        <>
          <h2>Logged in Successfully 💜</h2>
          <p>Your Spotify token is active.</p>
        </>
      ) : (
        <>
          <h1>BTS ARMY Playlist Generator 💜</h1>
          <button
            onClick={loginSpotify}
           style={{
              padding: "12px 20px",
              background: "#8B5CF6",
              color: "white",
              borderRadius: "8px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Login with Spotify
          </button>
        </>
      )}
    </div>
  );
}




export default App;