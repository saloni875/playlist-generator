// src/pages/Home.jsx
export default function Home() {
  const loginSpotify = () => {
    console.log("👉 Login button clicked");
    window.location.href = "http://127.0.0.1:4000/auth/login";
  };

  return (
     <div style={{ padding: "20px", fontSize: "24px",color: "purple" }}>
      {/* {accessToken ? (
        <>
          <h2>Logged in Successfully 💜</h2>
          <p>Your Spotify token is active.</p>
        </>
      ) : (
        <> */}
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
        {/* </> */}
      {/* )} */}
    </div>
  );
}
