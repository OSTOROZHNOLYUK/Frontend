import React, { useState } from 'react';

const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород'];

const Step = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [description, setDescription] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).slice(0, 5);
    setFiles(selectedFiles);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Заявка отправлена:', { files, selectedCity, description });
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

  return (
    <div>
      <div className="steps_header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px' }}>
        {['Шаг 1', 'Шаг 2', 'Шаг 3'].map((label, index) => (
          <div
            key={index}
            style={{
              color: step === index + 1 ? 'black' : 'gray',
              fontWeight: step === index + 1 ? 'bold' : 'normal',
              borderBottom: step === index + 1 ? 'black' : 'gray',   }}
          >
            {label}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h2>Шаг 1: Загрузите фото</h2>
          <input type="file" multiple accept="image/*" onChange={onFileChange} />
          <button onClick={() => setStep(2)}>Далее</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Шаг 2: Выберите город</h2>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Выберите город</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {selectedCity && (
            <div>
              <button>Ввести адрес вручную</button>
              <button>Выбрать на карте</button>
            </div>
          )}
          <button onClick={() => setStep(3)}>Далее</button>
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
          <button onClick={() => setStep(1)}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default Step;