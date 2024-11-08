function reducer(state, action) {
    switch (action.type) {
    case ("ADD_ACCORDION"): {
        return [
            ...state,
            action.payload
        ]
    }

    case ("DELETE_ACCORDION"): {
        return state.filter((accor) => accor.id !== action.payload)
    }
    }
}

export default reducer;