const IntialState = {
    location: {},
    cameraAccess: '',
}

export function PermissionReducers(state = IntialState, action) {
    switch (action.type) {
        case 'LOACTION_ACCESS':
            return { ...state, location: action.payload }
        case 'CAMERA_ACCESS':
            return { ...state, cameraAccess: action.payload }
        default:
            return state

    }
}