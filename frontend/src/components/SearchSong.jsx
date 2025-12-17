import { useState } from "react";
import { searchSpotifyTracks } from "../api/axios";

const BTS_ARTIST_IDS = new Set([
  // BTS
  "3Nrfpe0tUJi4K4DXYWgMUX",

  // Jungkook
  "6HaGTQPmzraVmaVxvz6EUc",

  // Jimin
  "1p2m8rUOZ3jvdrhGZ0P0y0",
  "5RmQ8k4l3Hz2Brq4b3vG8n", // alt Jimin credits

  // V (Taehyung)
  "3rRcQeLsvxT0n82X9ZQ9OY",
  "6jJ0s89eD6GaHleKKya26X", // V OST / solo credits

  // RM
  "2auC28zjQyVTsiZKNgPRGs",

  // Jin
  "5vV3bFXnN6D6N3Nj4xRvaV",

  // SUGA
  "77S6PjfD6oFvYpN6f9r8E0",

  // Agust D (separate artist!)
  "5RmQ8k4l3Hz2Brq4b3vG8n",

  // j-hope
  "0b1sIQumIAsNbqAoIClSpy",
]);



export default function SongSearch() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const data = await searchSpotifyTracks(query);

      const filtered = data.tracks.items.filter((track) =>
        track.artists.some((artist) =>
          BTS_ARTIST_IDS.has(artist.id)
        )
      );


      setTracks(filtered);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div>
      <h3>Search BTS Songs 💜</h3>

      <input
        placeholder="Search song name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {loading && <p>Searching…</p>}

      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <strong>{track.name}</strong>{" "}
            — {track.artists.map(a => a.name).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
