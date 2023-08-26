import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Icon from '../../assets/icons/gym.png'
import './BodyParts.css'
import { AuthContext } from '../Context/Context'

// const BodyParts = ({item,bodyPart,setbodyPart}) => {
const BodyParts = ({item}) => {

  const {bodyPart,setbodyPart}=useContext(AuthContext)
  return (
    
        <Stack
         type="button"
         alignItems="center"
         justifyContent="center"
         className="bodyPart-card"
         sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '270px', cursor: 'pointer', gap: '35px' } : { background: '#fff', borderRadius: '20px', width: '270px', height: '270px', cursor: 'pointer', gap: '37px' }}
         onClick={() => {
          setbodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          console.log("hello",item);
        }}
      >
          {/* style={{height:"40px",width:"40px"}} */}
            <img src={Icon} alt="dumbbel"  style={{height:"55px",width:"55px"}}  />
            <Typography fontSize="20px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
        </Stack>
    
  )
}

export default BodyParts