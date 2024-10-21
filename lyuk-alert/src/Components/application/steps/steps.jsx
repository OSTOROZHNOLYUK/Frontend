import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './steps.scss';
import photo from './photo.png';
import map from './map.png'
import enter from './enter.png';
import { Link } from "react-router-dom";
import axios from 'axios';

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
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [contacts, setContacts] = useState('');
  const [geo, setGeo] = useState({ latitude: '', longitude: '' });
  const [file] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
  const handleSubmit = async (event) => {
    event.preventDefault();


    const formData = new FormData();
    

    const jsonData = {
      // email: email,
      description: description,
      city: city,
      address: address,
      contacts: contacts,
      geo: geo,
    };

    console.log('Отправляемые данные:', jsonData);
    console.log('Файл:', file);

    formData.append('json', JSON.stringify(jsonData));
    
    if (file) {
      formData.append('file', file);
    } else {
      setErrorMessage('Пожалуйста, выберите файл для загрузки.');
      return;
    }

    try {
      const response = await axios.post('https://sf-hackathon.xyz/api/reports/new', formData);

      if (response.status === 201) {
        setSuccessMessage(`Заявка успешно отправлена! Номер заявки: ${response.data.id}`);
        setErrorMessage('');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(`Ошибка: ${error.response.data.message}`);
        setSuccessMessage('');
      } else {
        setErrorMessage('Ошибка при отправке заявки. Попробуйте еще раз.');
        setSuccessMessage('');
      }
    }
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
    
  //   const formData = new FormData();
  //   formData.append('email', email);
  //   formData.append('description', description);
  //   files.forEach((file) => {
  //     formData.append('files', file);
  //   });

//   try {
//     const response = await fetch('https://sf-hackathon.xyz/api/reports/new', {
//       method: 'POST',
//       mode: 'no-cors',
//       body: formData,
//     });
//     if (response.ok) {
//       alert('Заявка успешно отправлена!');
//       // Сброс состояния после успешной отправки
//       setEmail('');
//       setDescription('');
//       setFiles([]);
//       setIsPhotoUploaded(false);
//       setStep(1); // Возврат к первому шагу
//     } else {
//       alert('Ошибка при отправке заявки. Попробуйте еще раз.');
//     }
//   } catch (error) {
//     console.error('Ошибка:', error);
//     alert('Ошибка при отправке заявки. Попробуйте еще раз.');
//   }
// };

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
            {isPhotoUploaded ? 'Добавьте фото' : 'Загрузить фото'}
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
          <select onClick={handleCityChange} >
            <option  
            value={city}
            onChange={(e) => setCity(e.target.value)}>Введите название города </option>
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
                 
                value={address}
          onChange={(e) => setAddress(e.target.value)}
           
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
        <div className='stepBody'>
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
          <p>Поле для заполнения <strong>необязательно</strong>,но <strong>детали важны</strong></p>
          <textarea
          className='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Здесь можно добавить описание проблемы, например, детали ситуации или уровень срочности"
          />    
          <button className="btn_back"  onClick={() => setStep(2)}>Назад</button>
          <Link to={'/thanks'}>
          <button  className="btn_apply" onClick={handleSubmit}>Отправить заявку <img src={enter}/></button>
          </Link>
        </div>
      )}
       {mapVisible && (
            <YMaps>
              <Map
                defaultState={{ center: [55.7558, 37.6173], zoom: 8 }} 
                onClick={handleMapClick}
              >
                {markerPosition && <Placemark geometry={markerPosition} />}
              </Map>
              <button onClick={() => setMapVisible(false)}>Закрыть карту </button>
            </YMaps>
          )}
    </div>
  );
};

export default Step;

