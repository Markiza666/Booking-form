import './App.css';
import { useState, ChangeEvent } from 'react'; 
import InputField from './components/InputField'; // Importera InputField-komponenten

interface FormData {
  klass: string;
  titel: string;
  fornamn: string;
  efternamn: string;
  godkanner: boolean;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    klass: '',
    titel: '',
    fornamn: '',
    efternamn: '',
    godkanner: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    let newValue;

    if (type === 'checkbox') {
      newValue = event.target.checked as boolean;
    } else {
      newValue = value;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Här kan du skicka datan till en server eller göra något annat med den
  };

  return (
    <>
      <h1>ÅKA TÅG</h1>
      <h4>STOCKHOLM</h4><h4>GÖTEBORG</h4>
      <form onSubmit={handleSubmit}>
        <InputField label="Klass" id="klass" name="klass" type="text" value={formData.klass} onChange={handleInputChange} />
        <InputField label="Titel" id="titel" name="titel" type="text" value={formData.titel} onChange={handleInputChange} />
        <InputField label="Förnamn" id="name" name="name" type="text" value={formData.klass} onChange={handleInputChange} />
        <InputField label="Efternanmn" id="famname" name="famname" type="text" value={formData.titel} onChange={handleInputChange} />
        <label htmlFor="godkanner">Godkänner villkoren:</label>
        <input
          type="checkbox"
          id="godkanner"
          name="godkanner"
          checked={formData.godkanner}
          onChange={handleInputChange}
        />

        <button type="submit">Skicka</button>
      </form>
    </>
  );
};

export default BookingForm;
