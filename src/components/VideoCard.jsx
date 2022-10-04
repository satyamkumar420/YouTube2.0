import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "350px", md: "290px" },
          borderRadius: "12px",
          ":hover": {
            boxShadow: "0px 0px 9px 5px #cc0202",
            transform: "scale(1.05)",
            transition: "all 0.4s",
          },
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: { xs: "100%", sm: "350px", md: "290px" },
              height: 180,
            }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#0e1832", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0, 110) ||
                demoVideoTitle.title.slice(0, 110)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="red">
              {snippet?.channelTitle || demoVideoTitle}
              <CheckCircle sx={{ fontSize: 12, color: "red", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
