import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
// import HorizontalScrollbar from '../HorizontalScrollbar'
import Loader from '../Loader'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'

const SimilarExercises = ({equipmentExercises,targetMuscleExercises}) => {
  return (
    <div>
      <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
<Typography  sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={600} color="#000" mb="40px">
Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
</Typography>

<Stack direction="row" sx={{ p: 2, position: 'relative' }}>
{targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises}/>:
<Loader/>}
</Stack>

<Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="40px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
      </Box>
    </div>
  )
}

export default SimilarExercises