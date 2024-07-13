import { useState, type ChangeEvent } from 'react';
import { PhoneInput } from '../../components/PhoneInput';
import { TextInput } from '../../components/TextInput';
import { SelectInput } from '../../components/SelectInput';
import { ISO_COUNTRIES } from '../../consts/countries';
import type { CountryCode } from 'libphonenumber-js';
import { TextAreaInput } from '../../components/TextAreaInput';
import { CheckboxInput } from '../../components/CheckboxInput';
import { Button } from '../../components/Button';

/*
    TODO: 
    - [ ] Change country TextInput to be a Select, add countries list with its 2 letters country code.
    - [ ] Add support to get the country code (2 letters format) to use it in the phone number input
 */
export const AskForPrayingFrom = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [pray, setPray] = useState('');

  return (
    <div>
      <TextInput
        label="Nombre y apellido"
        placeholder="Angie Braga"
        fullWidth
        containerClasses="mt-5"
      />
      <TextInput
        label="Email"
        placeholder="Email"
        type="email"
        fullWidth
        containerClasses="mt-5"
      />
      <SelectInput
        options={ISO_COUNTRIES.map((country) => {
          return {
            label: country.name,
            value: country.code
          };
        })}
        value={countryCode}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setCountryCode(event.target.value)
        }
        label="País"
        placeholder="México"
        fullWidth
        containerClasses="mt-5"
      />
      <TextInput
        label="Ciudad"
        placeholder="Mérida"
        fullWidth
        containerClasses="mt-5"
      />
      <PhoneInput
        label="Celular (opcional)"
        placeholder="639 166 5723"
        fullWidth
        maxLength={15}
        countryCode={countryCode as CountryCode}
        value={phoneNumber}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPhoneNumber(event.target.value)
        }
        containerClasses="mt-5"
      />
      <TextAreaInput
        label="Oración"
        placeholder="Me gustaría por favor que oren por mi familia para que se acerque a Dios"
        fullWidth
        containerClasses="mt-5"
        inputClasses="resize-none h-32"
        value={pray}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setPray(event.target.value)
        }
        maxLength={150}
      />
      <CheckboxInput
        label="Doy mi consentimiento para que la iglesia
Avivamiento Yucatán almacene mis datos para
ponerse en contacto conmigo"
        containerClasses="mt-5"
      />
      <Button filled fullWidth classes="mt-8">
        Enviar
      </Button>
      <Button transparent fullWidth classes="mt-6">
        Quizás más tarde
      </Button>
    </div>
  );
};
