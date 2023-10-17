// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import { songs } from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const { songTitle } = useParams();
  const info = songs.find((song) => song.title === songTitle);

  return (
    <>
      <div>
        <h2>Song Information</h2>
        <p>{info.title}</p>
        <p>{info.rank}</p>
        <p>{info.artist}</p>
        <p>{info.album}</p>
        <p>{info.year}</p>
        {/* TODO: Display song details or a "Song not found!" message */}
      </div>
    </>
  );
}

export default SongInfo;
