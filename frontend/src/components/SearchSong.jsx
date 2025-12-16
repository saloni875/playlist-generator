import { useState } from "react";
import { searchSpotifyTracks } from "../api/axios";

const BTS_ARTISTS = [
  "BTS",
  "RM",
  "Jin",
  "SUGA",
  "Agust D",
  "j-hope",
  "Jimin",
  "V",
  "Jungkook",
];

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
          BTS_ARTISTS.includes(artist.name)
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
