
import React from "react";
import { useDispatch } from 'react-redux';
import { storelocationDetials, storeCamerAccess } from "./actions/permissionAction";
class DeviceIdentifier {
    constructor() {
        this._userAgent = navigator.userAgent || "";
        this._platform = navigator.platform || "";
    }

    get isAndroid() {
        return /android/i.test(this._userAgent);
    }

    get isIos() {
        return /iPad|iPhone|iPod/.test(this._platform);
    }

    get isMobile() {
        return /android|iphone|kindle|ipad/i.test(this._userAgent);
    }

    get isDesktop() {
        return !this.isMobile
    }
}
let iosInterface = (window.webkit ? window.webkit.messageHandlers : {});
const __internalWindow = window;
var AndroidInterface = __internalWindow['Android'] ? __internalWindow['Android'] : {};

let deviceIdentifier = new DeviceIdentifier();
export function sendGetLocationRequest() {
    console.log('entered 0')

    if (deviceIdentifier.isIos) {
        console.log('entered')
        iosInterface.sendGetLocationDetials && iosInterface.sendGetLocationDetials.postMessage("location");
        // intializeGlobalVariable()
    } else if (deviceIdentifier.isAndroid) {
        console.log('entered android')
        AndroidInterface.sendGetLocationDetials && AndroidInterface.sendGetLocationDetials("location");
    }
    return true;
}

export function sendGetCameraRequest() {
    console.log('entered 0')

    if (deviceIdentifier.isIos) {
        console.log('entered')
        iosInterface.sendGetcameraAccess && iosInterface.sendGetcameraAccess.postMessage("camera");
        // intializeGlobalVariable()
    } else if (deviceIdentifier.isAndroid) {
        console.log('entered android')
        AndroidInterface.sendGetcameraAccess && AndroidInterface.sendGetcameraAccess("camera");
    }
    return true;
}


export function HandleloactionDetials() {
    const dispatch = useDispatch();

    if (!window.hasOwnProperty('sendLocationData')) {
        Object.defineProperty(window, 'sendLocationData', {
            value: (response) => {
                console.log("sendLocationData function called in web ", response);

                let locationRes = JSON.parse(response);
                if (Object.keys(locationRes).length > 0) {
                    dispatch(storelocationDetials(locationRes))
                } else {
                    dispatch(storelocationDetials(""))
                    console.log("inside failure sendLocationData .status");
                }

            },
            writable: false,
        });
    }
    else {
        console.log("showing Cannot redefine property: location ",);
    }
}

export function HandleCamAccess() {
    const dispatch = useDispatch();

    if (!window.hasOwnProperty('sendCameraImageData')) {
        Object.defineProperty(window, 'sendCameraImageData', {
            value: (response) => {
                console.log("sendCameraImageData function called in web ", response);
                // let watchListrRes = JSON.parse(response);
                if (response) {
                    dispatch(storeCamerAccess(response))
                } else {
                    dispatch(storeCamerAccess(""))
                    console.log("inside failure sendCameraImageData .status");
                }

            },
            writable: false,
        });
    }
    else {
        console.log("showing Cannot redefine property: accessCamera ",);
    }
}