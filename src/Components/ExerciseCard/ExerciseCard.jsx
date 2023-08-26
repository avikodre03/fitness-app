import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './ExerciseCard.css'

const ExerciseCard = ({exercises}) => {
  
  return (
    <div>
        <Link to={`/exercise/${exercises.id}`} className='exercises-Card'>
          <img src={exercises.gifUrl} alt={exercises.name} loading="lazy" />
          <Stack direction='row'>

          <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
         {exercises.bodyPart}
          </Button>
          <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
         {exercises.target}
          </Button>
          </Stack>
          <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '21px', xs: '18px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercises.name}
    </Typography>
        </Link>
    </div>
  )
}

export default ExerciseCard