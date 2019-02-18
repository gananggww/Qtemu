import React from 'react'

export const Prev = ({list}) => {  
    return (
        <div>
            <div className="items">
            {
                list.map((e, idx) => {
                    return (
                        <div onClick={() => alert_content(idx + 1, e)} className="item">
                            <div className="fill">{idx + 1} {e.date}</div>
                            <div className="fill">{if_null(e.place)}</div>
                            <div className="fill">{if_null(e.many)}</div>
                        </div>
                    )
                })
            }
            </div>    
        </div>
    )
}

export const Swapi = ({list}) => {  
    return (
        <div>
            <div className="items">
            {
                list.map((e, idx) => {
                    return (
                        <div onClick={() => alert_content(idx + 1, e)} className="item">
                            <div className="fill">{idx + 1} {e.name}</div>
                            <div className="fill">{if_null(e.height)}</div>
                            <div className="fill">{if_null(e.hair_color)}</div>
                            <div className="fill">{if_null(e.url)}</div>                            
                        </div>
                    )
                })
            }
            </div>    
        </div>
    )
}


const if_null = (payload) => {
    if (!payload || payload == 'n/a')
        return 'tidak ada value'
    else 
        return payload    
}

const alert_content = (idx, e) => {
    let rs = `hai aku index ${idx} aku lahirpada tanggal ${e.date}`
    alert(rs)
}

export const Next = ({obj}) => {  
    return (
        <div>
            {
            <div className="paragraph-content">
                <div className="title-paragraph-content">{obj.title}</div>
                <div className="date-paragraph-content">{obj.date}</div>
                <div className="fill-paragraph-content">{obj.content}</div>
            </div>
            }
        </div>    
    )
}