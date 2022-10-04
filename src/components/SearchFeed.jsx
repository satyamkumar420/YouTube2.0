import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} minHeight="95vh">
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          color="white"
          ml={{ sm: "100px" }}
        >
          Search Results for :
          <span style={{ color: "#F31503" }}> {searchTerm}</span> videos
        </Typography>
        <Box display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default SearchFeed;
