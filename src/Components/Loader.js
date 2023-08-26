import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';
const Loader = () => {
    return (
        <div>
            <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
                <InfinitySpin color="grey" />
            </Stack>
        </div>
    )
}

export default Loader