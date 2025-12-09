function App() {
  const loginSpotify = () => {
    window.location.href = "http://localhost:4000/auth/login";
  };

  return (
    <div style={{ padding: "20px", color: "purple" }}>
      <h1>BTS ARMY Playlist Maker 💜</h1>

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
    </div>
  );
}

export default App;
