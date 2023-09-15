import { IcSectionContainer, IcTextField, IcButton, IcTypography,IcAlert } from '@ukic/react/dist/components';
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
         <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages."/>
         <IcAlert variant="info" heading="Info" message="This alert is for displaying information." />
         <IcAlert variant="error" heading="Error" message="This alert is for displaying errors." />
         <IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings." />
         <IcAlert variant="success" heading="Success" message="This alert is for displaying success messages." />
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
