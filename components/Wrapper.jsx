import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div className={`max-w-[1500px] px-3 mx-auto ${children || ''}`}>
            {children}
        </div>
    )
}

export default Wrapper