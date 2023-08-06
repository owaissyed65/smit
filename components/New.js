import React, { memo } from 'react'

const New = memo(({data}) => {
   
    console.log("hello")
    return (
        <div>
            {data}         
        </div>
    )
})

export default New
