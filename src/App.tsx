import { IcSectionContainer, IcTextField, IcButton, IcTypography } from '@ukic/react/dist/components';
import Header from './components/Header';
import './App.css'
import { useRef, useState } from 'react';


const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const textFieldRef = useRef<HTMLIcTextFieldElement>(null);

  return (
    <>
      <Header />
      <IcSectionContainer aligned='center'>
        <div className='wrapper'>
          <IcTextField label='Enter a name to be greeted below' helperText='Name' ref={textFieldRef} />
          <IcButton onClick={() => setName(textFieldRef?.current?.value as string)}>Submit</IcButton>
          {name && (
            <IcTypography>Hello, {name}</IcTypography>
          )}
        </div>
      </IcSectionContainer>
    </>
  )
}

export default App
