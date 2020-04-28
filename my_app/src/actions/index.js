import { axiosWithAuth } from '../utils/axiosWithAuth'

//posting action for login and signup

export const POSTING = 'POSTING'
export const POSTING_FAILURE = 'POSTING_FAILURE'
export const POSTING_SIGNUP_SUCCESS = 'POSTING_SIGNUP_SUCCESS'
export const POSTING_LOGIN_SUCCESS = 'POSTING_LOGIN_SUCCESS'

export const signupSave = (userInput) => {
    return (dispatch) => {
        dispatch({ type: POSTING })
        //need to add endpoints
        axiosWithAuth().post('/api/auth/login', userInput)
            .then(response => {
                window.localStorage.setItem('token', response.data.token)
                dispatch({ type: POSTING_SIGNUP_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: POSTING_FAILURE })
            })
    }
}

export const loginSave = (userInput) => {
    return (dispatch) => {
        dispatch({ type: POSTING })
        //need to add endpoints
        axiosWithAuth().post('/api/auth/login', userInput)
            .then(response => {
                window.localStorage.setItem('token', response.data.token)
                // alert('redirecting to the Auction Page')
                dispatch({ tpye: POSTING_LOGIN_SUCCESS, payload: { user_id: response.data.id, user_type: response.data.type } })

            })
            .catch(err => {
                dispatch({ type: POSTING_FAILURE })
            })
    }
}

// fetching auction from main menu
export const FETCHING = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'



export const fetchAuction = () => {
    console.log("fetch auction logging");

    return (dispatch) => {
        dispatch({ type: FETCHING })
        //need endpoints from backend
        return axiosWithAuth().get('/api/users/profile')
            .then(response => {
                console.log("fetching auction response", response)
                dispatch({ type: FETCHING_SUCCESS, payload: response.data })
            })
            .catch(err => {
                console.log("failure: ", err);
                console.log(err)
                // dispatch({ type: FETCHING_FAILURE })

                var auctions = [{ name: 'auction test 1', description: 'test description', initial_price: 55 }]
                dispatch({ type: FETCHING_SUCCESS, payload: auctions })

            })
    }
}

// posting a new auction

export const AUCTION_POSTING = 'AUCTION_POSTING'
export const AUCTION_POSTING_FAILURE = 'AUCTION_POSTING_FAILURE'
export const AUCTION_POSTING_SUCCESS = 'AUCTION_POSTING_SUCCESS'

export const postAuction = (listing) => {
    return (dispatch) => {
        dispatch({ type: AUCTION_POSTING })
        axiosWithAuth().post('', listing)
            .then(response => {
                console.log("postAuction response data", response)
                dispatch({ type: AUCTION_POSTING_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: AUCTION_POSTING_FAILURE })
            })
    }
}

// deleting an auction

export const AUCTION_DELETE = 'AUCTION_DELETE'
export const AUCTION_DELETE_FAILURE = 'AUCTION_DELETE_FAILURE'
export const AUCTION_DELETE_SUCCESS = 'AUCTION_DELETE_SUCCESS'

export const deleteAuction = (id) => {
    return (dispatch) => {
        dispatch({ type: AUCTION_DELETE })
        //need to add endpoints below
        axiosWithAuth().delete(`${id}`)
            .then(response => {
                console.log(response)
                dispatch({ type: AUCTION_DELETE_SUCCESS })
            })
    }
}

// updating auction

export const AUCTION_UPDATE = 'AUCTION_UPDATE'
export const AUCTION_UPDATE_FAILURE = 'AUCTION_UPDATE_FAILURE'
export const AUCTION_UPDATE_SUCCESS = 'AUCTION_UPDATE_SUCCESS'

export const updateAuction = (id, listing) => {
    return (dispatch) => {
        dispatch({ type: AUCTION_UPDATE })
        //need to add endpoint below
        axiosWithAuth().put({ id }, listing)
            .then(response => {
                console.log(response)
                dispatch({ type: AUCTION_UPDATE_SUCCESS })

            })
            .catch(err => {
                console.log(err)
                dispatch({ type: AUCTION_UPDATE_FAILURE })
            })
    }
}
