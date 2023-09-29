import { IcSectionContainer, IcTextField, IcButton, IcTypography,IcAlert,IcBackToTop,IcSelect } from '@ukic/react/dist/components';
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
         <IcAlert variant="info" heading="Info" message="You should read this message." />
         <IcAlert variant="error" heading="Error" message="This alert is for displaying errors." />
         <IcAlert variant="error" heading="DataError" message="A problem has been occurred while submitting your data." />
         <IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings." />
         <IcAlert variant="warning" heading="Hot drink" message="Please be careful, your drink will be hot." />
         <IcAlert variant="success" heading="Success" message="This alert is for displaying success messages." />
         <IcAlert variant="success" heading="Success Login" message="You are successfully logged in." />
         <IcAlert variant="success" heading="Success LoginLong message" message="12!£$%^&*You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in
         .You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.
         You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.
         " />

         <IcTextField label='Enter a name to be greeted below' helperText='Name' ref={textFieldRef} />
         <IcSelect label="What is your favourite coffee?"
  options={[
    { label: "Espresso", value: "espresso" },
    { label: "Double Espresso", value: "doubleespresso" },
    { label: "Flat White", value: "flatwhite" },
    { label: "Cappuccino", value: "cappuccino" },
    { label: "Americano", value: "americano" },
    { label: "Mocha", value: "mocha" },
  ]}
  onIcChange={(event) => console.log(event.detail.value)}
/>


         <IcButton onClick={() => setName(textFieldRef?.current?.value as string)}>Submit</IcButton>
          {name && (
            <IcTypography>Hello, {name}</IcTypography>
          )}
          
          <IcBackToTop target="main" />

        </div>


      </IcSectionContainer>
    </>
  )
}

export default App
