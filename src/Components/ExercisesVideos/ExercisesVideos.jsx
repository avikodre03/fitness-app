import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import './ExercisesVideos.css'
import Loader from '../Loader';

const ExercisesVideos = ({ exerciseVideos, name }) => {
   if(!exerciseVideos.length) return <Loader/>
    return (
        <div>
            <Box sx={{ marginTop: { lg: '150px', xs: '20px' } }} p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="40px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

                <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '90px', xs: '0px' },
                    justifyContent:'center'
                }}>
                    {exerciseVideos?.slice(0, 6).map((ele, idx) => {
                        return <a
                            key={idx}
                            className="exercise-video"
                            href={`https://www.youtube.com/watch?v=${ele.video.videoId}`}
                            target="_blank"
                            rel="noreferrer">
                            <img src={ele.video.thumbnails[0].url} alt={ele.video.title} />
                            <Box>
                                <Typography sx={{ fontSize: { lg: '25px', xs: '18px' } }} fontWeight={600} color="#000">
                                {ele.video.title}
                                </Typography>
                                <Typography sx={{ fontSize: { lg: '18px', xs: '18px' } }} fontWeight={600} color="red">
                                {ele.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    })}
                </Stack>
            </Box>
        </div>
    )
}

export default ExercisesVideos