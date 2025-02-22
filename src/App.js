import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greeting from './Greeting';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumberTable from './NumberTable';


function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height="178"
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height="172"
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greeting lang="de" children="Ludwig">Ludwig</Greeting>
      <Greeting lang="fr" children="François"></Greeting>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Chase"
        owner="Dicky"
        bgColor="#ddbb55"
        color="white" />





      <LikeButton />
      <ClickablePicture />
      <Dice />

      <Carousel />
      <NumberTable limit={12} />


    </div>
  );
}

export default App;
