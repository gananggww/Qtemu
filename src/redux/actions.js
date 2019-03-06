import axios from 'axios';
export const searchAction = (payload) => {
    return {
        type: 'SEARCH',
        payload: payload
    }
}

export const headerAction = (payload) => {
    return {
        type: 'HEADER',
        payload: payload
    }
}

export const fetchAction = (payload) => {
    return {
        type: 'FETCH',
        payload: payload
    }
}

export const change_page = (currentPage) => {
    return {
        type: 'CHANGE_PAGE',
        payload:  currentPage
    }
}

export const fetchThunk = (payload=1) => {
    return async(dispatch, getState) => {        
        try {
            let curr = await getState()
            let page = 1
            if (curr) {
                page = curr.currentPage
            }
            let options = {
                method: 'GET',
                url: `https://swapi.co/api/people/?page=${payload}`
            }
            let { data } = await axios(options)
            if (data) {
                return dispatch(fetchAction(data))
            } else {
                return dispatch(fetchAction('loading'))
            }
        } catch(error) {
            console.log(error);
        }
    }
}

export const headerThunk = (payload) => {
    return (dispatch, getState) => {   
        return dispatch(headerAction(payload))        
    }
}

