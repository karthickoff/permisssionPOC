import './App.css';
import { useSelector } from 'react-redux';
import { PermissionReducers } from './reducers/permissionReducer';
import { HandleCamAccess, HandleloactionDetials, sendGetCameraRequest, sendGetLocationRequest } from './deviceinterface';
import { useEffect, useState } from 'react';

function App() {
  HandleCamAccess();
  HandleloactionDetials();
  const [location, setLocation] = useState({});
  const [cameraDetials, setCameraDetials] = useState('')

  const PermissonReducerValues = useSelector(state => state.PermissionReducers);
  const cameraReducerValues = PermissonReducerValues.cameraAccess;
  const locationReducerValues = PermissonReducerValues.location;

  useEffect(() => {
    setCameraDetials(cameraReducerValues)
  }, [cameraReducerValues]);
  useEffect(() => {
    setLocation(locationReducerValues)
  }, [locationReducerValues])
  const handleCam = () => {
    console.log("inside handleCam ");

    sendGetCameraRequest();

  }
  const handleLocation = () => {
    console.log("inside handleLocation ");
    sendGetLocationRequest();
  }
  return (
    <div className="App">
      <div className='btn-parent'>
        {/* <input type='button' value="Get Location" onClick={handleLocation} /> */}
        <button type="button" onClick={handleLocation}>Get Location</button>

      </div>
      <div className='btn-parent'>
        <button type="button" onClick={handleCam}>Access Camera</button>



      </div>
      {cameraDetials &&
        <div className='image_area'>
          <p>camera Data </p>
          <img src={'data:image/jpeg;base64,' + cameraDetials} alt='camera image' />
        </div>
      }
      {Object.keys(location).length > 0 &&
        <div>
          <p>location Data</p>
          <p>{location.lat}</p>
          <p>{location.long}</p>

        </div>
      }

    </div>
  );
}

export default App;
