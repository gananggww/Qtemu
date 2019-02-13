import React from 'react'

export const Info = (xx) => {  
    return (
        <div>
            <div className="sub-header">
                {
                    xx.info.map(e => {
                        return <div>{e}</div>  
                    })
                }
            </div>  
        </div>    
    )
}
