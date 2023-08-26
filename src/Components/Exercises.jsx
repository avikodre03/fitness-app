import { Box, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { exercisesOptions, fetchData } from '../Utils/fetchData';
import ExerciseCard from './ExerciseCard/ExerciseCard';
import { AuthContext } from './Context/Context';


const Exercises = ({setbodyPart,bodyPart,exercises,setExercises}) => {
// const Exercises = () => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage=9

  // const {bodyPart,exercises,setExercises}=useContext(AuthContext)
  

useEffect(()=>{

const fetchExercisesData=async()=>{

  let exercisesData=[]
  if(bodyPart==='all'){

    exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions)
  }else{
    exercisesData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions)
  }
  
  setExercises(exercisesData)
}
fetchExercisesData()

},[bodyPart])

const indexOfLastExercise=currentPage*exercisesPerPage; //9
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; //0
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); 
  
  //slice(0,9) ending index (exclusive) so '9' elements inn this array till index '8'


const paginate=(e, value)=>{
  setcurrentPage(value)
  window.scrollTo({ top: 1800, behavior: 'smooth' });
}

  return (
    <div>
      <Box id="exercises"
      sx={{
        mt:{lg:'100px'}
      }}
      mt="50px"
      p="20px"
      >
<Typography variant='h3' mb='46px'>
  Showing Results
</Typography>
<Stack direction='row' sx={{gap:{lg:'110px', xs:"50px"}}}
flexWrap='wrap' justifyContent='center'>

{currentExercises.map((ele,idx)=>{
  return <ExerciseCard key={idx} exercises={ele}/>
})}

</Stack>
<Stack mt="100px" alignItems='center'>
{exercises.length>9 && (
  <Pagination
  color="standard"
  shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
  />
)}
{/* // behind onChange={paginate} onChange={(e)=>paginate(e,value)}*/}
</Stack>
      </Box>
    </div>
  )
}

export default Exercises