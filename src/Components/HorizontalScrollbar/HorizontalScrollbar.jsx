import { Box } from '@mui/material';
import React, { useContext } from 'react'
import BodyParts from '../BodyParts/BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import RightArrowIcon from '../../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../../assets/icons/left-arrow.png';
// import Icon from '../../assets/icons/gym.png'

import './HorizontalScrollbar.css'
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { AuthContext } from '../Context/Context';

const HorizontalScrollbar = ({data,bodyPart,setbodyPart}) => {
// const HorizontalScrollbar = ({data}) => {
  
  // const {bodyPart}=useContext(AuthContext)
  return (
    <div 
    className='horizontal-scroller-wrapper'>
    {data.map((item) => {
      return <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyPart ? <BodyParts item={item}  />
        :<ExerciseCard exercises={item}/>}
        
      </Box>
})}
  </div> 

   
   
  )
}

export default HorizontalScrollbar