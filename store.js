import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    isLoaded: false,
    isAniKvDone: false,
    isAniInformationDone: false,
    isAniProfileDone: false,
    isAniPerformanceDone: false,
    pageTopBtn: false,
    articles: [],
}

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            return Object.assign({}, state, {
                isLoaded: true
            })
        case 'ANI_RESET':
            return Object.assign({}, state, {
                isAniKvDone: false,
                isAniInformationDone: false,
                isAniProfileDone: false,
                isAniPerformanceDone: false,
            })
        case 'ANI_KV':
            return Object.assign({}, state, {
                isAniKvDone: true,
            })
        case 'ANI_INFORMATION':
            return Object.assign({}, state, {
                isAniInformationDone: true,
            })
        case 'ANI_PROFILE':
            return Object.assign({}, state, {
                isAniProfileDone: true,
            })
        case 'ANI_PERFORMANCE':
            return Object.assign({}, state, {
                isAniPerformanceDone: true,
            })
        case 'SHOW_PAGETOPBTN':
            return Object.assign({}, state, {
                pageTopBtn: true,
            })
        case 'HIDE_PAGETOPBTN':
            return Object.assign({}, state, {
                pageTopBtn: false,
            })
        default:
            return state
    }
}

// ACTIONS
export const load = () => {
    return { type: 'LOAD' }
}

export const aniReset = () => {
    return { type: 'ANI_RESET' }
}

export const aniKv = () => {
    return { type: 'ANI_KV' }
}

export const aniInformation = () => {
    return { type: 'ANI_INFORMATION' }
}

export const aniProfile = () => {
    return { type: 'ANI_PROFILE' }
}

export const aniPerformance = () => {
    return { type: 'ANI_PERFORMANCE' }
}

export const showPageTopBtn = () => {
    return { type: 'SHOW_PAGETOPBTN' }
}

export const hidePageTopBtn = () => {
    return { type: 'HIDE_PAGETOPBTN' }
}

export function initializeStore (initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}