import { Box, Skeleton, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllproducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h2">FAKESTORE</Typography>
      {error && (
        <Typography color="error" variant="h3">
          Failed to load Products. Try Again!...
        </Typography>
      )}
      {loading?(
        <Grid container spacing={2}>
          {Array.from({length:5}).map((_,i)=>(
            <Grid key={i}>
              <Skeleton variant="rectangular" height={60} m={3}/>
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Grid>
          ))}
        </Grid>
      ):(<Typography variant="h3">Fetched Products</Typography>)}
    </Box>
  );
};

export default Products;
