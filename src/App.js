import "./App.css";
import React, { useState } from "react";
import PhotosList from "./components/PhotosList";
import Search2 from "./components/Search2";

const App = () => {
  const [photosList, setPhotosList] = useState([]);

  // console.log(keywordsData);
  return (
    <div className="App">
      <Search2 setPhotosList={setPhotosList} photosList={photosList} />
      <PhotosList photosList={photosList} />
    </div>
  );
};

export default App;
