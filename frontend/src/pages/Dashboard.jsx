import { useEffect, useState } from "react";
import { fetchSpotifyProfile } from "../api/axios";
import SearchSong from "../components/SearchSong";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchSpotifyProfile()
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <p>Loading your Spotify profile…</p>;

  return (
    <>
      <div>
        <h2>Welcome, {user.display_name} 💜</h2>
        <p>Spotify ID: {user.id}</p>

        {user.images?.[0] && (
          <img src={user.images[0].url} width="150" alt="profile" />
        )}
      </div>
      <div>
        <h2>Army Playlist Generator 💜</h2>
        <SearchSong />
      </div>
    </>
  );
}

