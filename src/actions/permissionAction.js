const LOACTION_ACCESS = 'LOACTION_ACCESS';
const CAMERA_ACCESS = 'CAMERA_ACCESS';
export function storelocationDetials(data) {
    console.log("inside Action storelocationDetials ", data);
    return {
        type: LOACTION_ACCESS,
        payload: data
    }
}
export function storeCamerAccess(data) {
    console.log("inside Action storelocationDetials ", data);
    return {
        type: CAMERA_ACCESS,
        payload: data
    }
}