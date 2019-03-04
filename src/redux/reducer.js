const defaultState = {
    query: '',
    header: ''
}

const myReducer = (state=defaultState, action) => {  
    switch (action.type) {    
        case "SEARCH":      
            return {...state, query: action.payload }
        case "HEADER":      
            return {...state, header: action.payload }
    }
};

export default myReducer