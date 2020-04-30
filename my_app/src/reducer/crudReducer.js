import { POSTING, POSTING_SIGNUP_SUCCESS, POSTING_LOGIN_SUCCESS, POSTING_FAILURE, FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE, AUCTION_POSTING, AUCTION_POSTING_SUCCESS, AUCTION_POSTING_FAILURE } from '../actions'


// export const POSTING = 'POSTING'
// export const POSTING_FAILURE = 'POSTING_FAILURE'
// export const POSTING_SIGNUP_SUCCESS = 'POSTING_SIGNUP_SUCCESS'
// export const POSTING_LOGIN_SUCCESS = 'POSTING_LOGIN_SUCCESS'


// export const FETCHING = 'FETCHING'
// export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
// export const FETCHING_FAILURE = 'FETCHING_FAILURE'

// export const AUCTION_POSTING = 'AUCTION_POSTING'
// export const AUCTION_POSTING_FAILURE = 'AUCTION_POSTING_FAILURE'
// export const AUCTION_POSTING_SUCCESS = 'AUCTION_POSTING_SUCCESS'


// export const AUCTION_DELETE = 'AUCTION_DELETE'
// export const AUCTION_DELETE_FAILURE = 'AUCTION_DELETE_FAILURE'
// export const AUCTION_DELETE_SUCCESS = 'AUCTION_DELETE_SUCCESS'



// export const AUCTION_UPDATE = 'AUCTION_UPDATE'
// export const AUCTION_UPDATE_FAILURE = 'AUCTION_UPDATE_FAILURE'
// export const AUCTION_UPDATE_SUCCESS = 'AUCTION_UPDATE_SUCCESS'

const initialState = {
    user: {
        user_id: '',
        user_type: ''
    },
    auctions: [{ name: 'test' }],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false
}

export const crudReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case POSTING:
            return { ...state, user_id: action.payload.user_id, user_type: action.payload.user_type, isPosting: false }
        case POSTING_LOGIN_SUCCESS:
            return { ...state, user_id: action.payload.user_id, user_type: action.payload.user_type, isPosting: false }
        case POSTING_SIGNUP_SUCCESS:
            return { ...state, isPosting: false }
        case POSTING_FAILURE:
            return { ...state, isPosting: false }
        case FETCHING:
            return { ...state, isFetching: true }
        case FETCHING_SUCCESS:
            console.log("handling fetch success: ", action.payload);
            return { ...state, auctions: action.payload, isFetching: false }
        case FETCHING_FAILURE:
            return { ...state, isFetching: false }
        case AUCTION_POSTING:
            return { ...state, isPosting: true }
        case AUCTION_POSTING_SUCCESS:
            return { ...state, auctions: action.payload, isPosting: false }
        case AUCTION_POSTING_FAILURE:
            return { ...state, isPosting: false }
        default: return state
    }
}