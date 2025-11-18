import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import Grid from "@mui/material/Grid";
import axios from "axios";

function App() {
  const [pData, setPData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((res) => setPData(res))
  //     .catch((err) => console.log("Error in fetching: ", err));
  // }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // console.log(response.data)
        setPData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: 3 }}
      >
        {pData.map((el) => {
          return (
            <Grid key={el.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <CardComponent post={el} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
