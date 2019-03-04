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

export const fetchThunk = () => {
    return async(dispatch, getState) => {
        let curr = await getState()
        if (curr) {
            console.log('====',curr);
        }
        let options = {
            method: 'GET',
            url: `https://swapi.co/api/people/?page=${1}`
          }
        try {
            let { data } = await axios(options)
            if (data) {
                return dispatch(fetchAction(data))
            } else {
                return dispatch(fetchAction('loading'))
            }
        } catch(error) {
            console.log('error');
        }
    }
}

export const headerThunk = (payload) => {
    return (dispatch, getState) => {   
        return dispatch(headerAction(payload))        
    }
}

