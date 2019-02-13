import React from 'react'

const Info = ({info}) => {  
    return (
        <div>
            <div className="sub-header">
                {
                    info.map(e => {
                        return <div>{e}</div>  
                    })
                }
            </div>  
        </div>    
    )
}

export default Info