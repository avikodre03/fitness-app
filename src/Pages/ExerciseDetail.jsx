import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exercisesOptions, fetchData, youtubeOptions } from '../Utils/fetchData'
import SimilarExercises from '../Components/SimilarExercises/SimilarExercises'
import ExercisesVideos from '../Components/ExercisesVideos/ExercisesVideos'
import DetailComp from '../Components/DetailComp/DetailComp'
import { AuthContext } from '../Components/Context/Context'

const ExerciseDetail = () => {
  // const [exerciseDetails, setexerciseDetails] = useState({})
  const [exerciseDetails, setexerciseDetails] = useState([])
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const {id}=useParams()

useEffect(()=>{
const fetchExercisesData=async()=>{
const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


const exerciseDetailsData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions)
setexerciseDetails(exerciseDetailsData)
console.log(exerciseDetailsData);

const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name} exercise`, youtubeOptions);
setexerciseVideos(exerciseVideosData.contents)

const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`, exercisesOptions);
setTargetMuscleExercises(targetMuscleExercisesData);

const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exercisesOptions);
setEquipmentExercises(equimentExercisesData);

}
fetchExercisesData()
},[id])

  return (
    <div>
      <Box>
        <DetailComp exerciseDetails={exerciseDetails}/>
        <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
      </Box>
    </div>
  )
}

export default ExerciseDetail