import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './steps.scss';
import photo from './photo.png';
import map from './map.png'

const cities = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
  'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону',
  'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград',
];

const Step = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [description, setDescription] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mapVisible, setMapVisible] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [manualAddress, setManualAddress] = useState('');

  const onFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).slice(0, 5);
    setFiles(selectedFiles);
    if (selectedFiles.length > 0) {
      setIsPhotoUploaded(true); 
    }
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Заявка отправлена:', { files, selectedCity, description, markerPosition });
  };

  const nextImage = () => {
    if (currentImageIndex < files.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleMapClick = (event) => {
    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };



  return (
    <div>
      <div className="step" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {['Шаг 1', 'Шаг 2', 'Шаг 3'].map((label, index) => (
          <div
            key={index}
            style={{
              color: step === index + 1 ? 'black' : 'gray',
              fontWeight: step === index + 1 ? 'bold' : 'normal',
              textDecoration: step === index + 1 ? 'underline' : 'none',
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className='stepBody'>
          <h2 className='step_title'> Загрузите фото</h2>
          <ul className='step_List'>
            <p>Необходимо загрузить несколько фото:</p>
            <li>&bull;  фото <strong>	люка с близкого ракурса</strong></li>
            <li>&bull;  фото <strong>люка и его окресностей</strong></li>
          </ul>
          <div style={{ marginTop: '20px' }}>
        {files.length > 0 && (
          <h3></h3>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {files.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`uploaded ${index}`}
              style={{ width: '100px', height: 'auto', margin: '5px' }}
            />
          ))}
          </div>
        </div>
          <input
            type="file"
            multiple
            accept="image/*"
            style={{ display: 'none' }}
            id="file-upload"
            onChange={onFileChange}
          />
          <label className='stepOne_btn' htmlFor="file-upload" >
            {isPhotoUploaded ? 'Добавьте фото' : 'Загрузить фото <img src="./photo"/>'}
          </label>
          {isPhotoUploaded && ( 
        <button className="btn_next" onClick={() => setStep(2)}>Далее</button>
      )}
      </div>
      )}
      {step === 2 && (
        <div className='stepBody'>
          <h2 className='step_title'>Отметьте локацию</h2>
          <p className='step_list'>Выберите город</p>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Введите название города </option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {selectedCity && (
            <div className='inputs'>
              <input 
              className='adress_btn' 
                type="text" 
                placeholder="Введите адрес вручную" 
                value={manualAddress} 
                onChange={(e) => setManualAddress(e.target.value)} 
                style={{ marginTop: '10px', padding: '5px', width: '100%' }} 
              />
              <button className='btn_map' onClick={() => setMapVisible(true)}> <img src={map}/>Выбрать на карте</button>
            </div>
          )}
          <button className="btn_next" onClick={() => setStep(3)}>Далее</button>
          <button className="btn_back" onClick={() => setStep(1)}>Назад</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Шаг 3: Опишите проблему</h2>
          <div>
            {files.length > 0 && (
              <div>
                <img src={URL.createObjectURL(files[currentImageIndex])} alt={`uploaded ${currentImageIndex}`} style={{ width: '300px', height: 'auto' }} />
                <div>
                  <button onClick={prevImage} disabled={currentImageIndex === 0}>Назад</button>
                  <button onClick={nextImage} disabled={currentImageIndex === files.length - 1}>Вперед</button>
                </div>
              </div>
            )}
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опишите вашу проблему"
          />
          <button onClick={handleSubmit}>Отправить заявку</button>
          <button className="btn_back"  onClick={() => setStep(2)}>Назад</button>
        </div>
      )}

      {/* {mapVisible && (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            id="map"
            mapContainerStyle={{ height: "400px", width: "100%" }}
            zoom={8}
            center={{ lat: 55.7558, lng: 37.6173 }} 
            onClick={handleMapClick}
          >
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
        </LoadScript>
      )} */}
    </div>
  );
};

export default Step;

