import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import './SearchExersics.css'
import { exercisesOptions, fetchData } from '../../Utils/fetchData';
// import HorizontalScrollData from './HorizontalScrollData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';
import { AuthContext } from '../Context/Context';

const SearchExersics = ({exercises,setExercises,bodyPart,setbodyPart}) => {

// const SearchExersics = () => {

    const [search, setSearch] = useState('')
    // all body part shorted name "all" add satically added
    const [bodyParts, setBodyParts] = useState([])
    // console.log(bodyParts)

    // const { setExercises } = useContext(AuthContext)

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
            setBodyParts(['all', ...bodyPartsData])

        }
        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)

            const SearchExercises = exercisesData.filter((ele) => {
                return ele.name.toLowerCase().includes(search)
                    || ele.bodyPart.toLowerCase().includes(search)
                    || ele.equipment.toLowerCase().includes(search)
                    || ele.target.toLowerCase().includes(search)
            })
            setSearch("");
            setExercises(SearchExercises)
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }
    }
    return (
        <div>

            <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
                <Typography fontWeight={700}
                    sx={{
                        fontSize: { lg: "44px", xs: "30px" }
                    }} mb="50px" textAlign="center">
                    Awesome Exercises You <br />
                    Should Know
                </Typography>
                <Box position="relative" mb="72px">
                    <TextField
                        sx={{
                            input: { fontWeight: "800", border: "none", borderRadius: "4px" },
                            width: { lg: "700px", xs: "300px" },
                            backgroundColor: "#FFF",
                            borderRadius: '40px',

                        }}
                        height="76px"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                        placeholder='Search Exercises'
                        type='text'
                    />
                    <Button className='search-btn'
                        sx={{
                            bgcolor: "#FF2625",
                            color: "white",
                            textTransform: "none",
                            width: { lg: "170px", xs: "80px" },
                            height: "56px",
                            fontSize: { lg: "20px", xs: "14px" },
                            position: "absolute",
                            right: "0"
                        }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Box>
                <Box sx={{
                    position: "relative",
                    width: "100%",
                    p: "20px"
                }}>
                    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} />
                </Box>

            </Stack>
        </div>
    )
}

{/* <HorizontalScrollbar data={bodyParts}  /> */}
export default SearchExersics
