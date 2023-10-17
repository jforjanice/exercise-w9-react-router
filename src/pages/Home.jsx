// TODO: Import necessary modules and data
import { Link } from "react-router-dom";
import titles from "../data/songs.json";

function Home() {
  // TODO: Implement logic to display the list of songs
  // const { songTitle } = useParams();
  // const song = songs.find((s) => s.rank === songTitle);

  return (
    <div>
      <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
      {titles.songs.map((song) => {
        return (
          <div key={song.rank}>
            <ul>
              <li>
                <Link to={`/song/${song.title}`}>{song.title}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
