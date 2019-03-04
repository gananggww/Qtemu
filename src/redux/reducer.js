const defaultState = {
    query: '',
    header: '',
    list_fetch: [],
    currentPage: 1
}

const myReducer = (state=defaultState, action) => {  
    switch (action.type) {    
        case "SEARCH":      
            return {...state, query: action.payload }
        case "HEADER":      
            return {...state, header: action.payload }
        case "FETCH":      
            return {...state, list_fetch: action.payload.results }
    }
};

export default myReducer