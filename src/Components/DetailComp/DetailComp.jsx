import { Button, Typography, Stack } from '@mui/material';
import React from 'react'
import './DetailComp.css'

import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'

const DetailComp = ({ exerciseDetails }) => {

     const { bodyPart, target, name, gifUrl, equipment } = exerciseDetails
console.log(exerciseDetails);
    
const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    },
];
    return (
        <div>
            <Stack gap='60px' sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
                <img src={gifUrl} alt={name} loading="lazy" className='details-image' />
                <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
                    <Typography variant='h3'>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        Exercises keep you strong.{' '}
                        <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                        of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                        <br /> mood and gain energy.
                    </Typography>

                    {extraDetail.map((ele) => {
                        return <Stack key={ele.name} direction="row" alignItems='center' gap='24px'>
                            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '80px', height: '80px' }}>
                                <img src={ele.icon} alt={bodyPart} style={{ width: '45px', height: '45px' }} /></Button>
                            <Typography variant='h5' textTransform= 'capitalize'>{ele.name}</Typography>
                        </Stack>
                    })}
                </Stack>
            </Stack>
        </div>
    )
}

export default DetailComp