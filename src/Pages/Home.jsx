import { Box } from '@mui/material'
import React, { useState } from 'react'

import SearchExersics from '../Components/SearchExersics/SearchExersics'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner/HeroBanner'

const Home = () => {
  // Search exercise data store this state
  const [exercises, setExercises] = useState([])
  const [bodyPart, setbodyPart] = useState("all")

  
  return (
    <div>
      <Box>
        {/* <HeroBanner />
        <SearchExersics />
        <Exercises  />
      </Box> */}
      <HeroBanner />
        <SearchExersics
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}
          exercises={exercises}
          setExercises={setExercises} />
        <Exercises 
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
        exercises={exercises}
        setExercises={setExercises} />
      </Box>
    </div>
  )
}

export default Home