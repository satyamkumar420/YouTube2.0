import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosDate = await fetchFromApi(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(videosDate?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(198,27,223,1) 0%, rgba(240,18,41,1) 48%, rgba(255,0,249,1) 100%)",
              zIndex: 10,
              height: "250px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box display="flex" p={2}>
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
