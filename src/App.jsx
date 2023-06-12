import { useState } from 'react'
import Benefit from './components/Benefit'
import Contacts from './components/Contacts'
import FormContactUs from './components/FormContactUs'
import Header from './components/Header'
import ImageWithText from './components/ImageWithText'
import Service from './components/Service'
import Alert from './components/UI/alert/Alert'
import { AlertContext } from './context'
import './styles/App.css'

function App() {
  const [isAlert, setIsAlert] = useState(false);

  const features = [
    { name: 'Опыт и профессионализм' },
    { name: 'Гибкость и индивидуальный подход' },
    { name: 'Оперативность и своевременность' },
    { name: 'Прозрачность и надёжность' },
  ];

  const algorithm = [
    { name: 'Вы оставляете заявку на нашем сайте или по телефону' },
    { name: 'Мы связываемся с вами для уточнения деталей доставки' },
    { name: 'Мы забираем ваш груз и доставляем его в указанное место' },
    { name: 'Вы получаете свой груз вовремя и без проблем' },
  ];
  
  return (
    <AlertContext.Provider value={{isAlert, setIsAlert}}> 
      <div className='app'>
        <Header/>
        <ImageWithText/>
        <div className='container'>
          <Benefit title='Что вы получаете работая с нами' benefits={features}/>
          <Benefit title='Как мы работаем' benefits={algorithm}/>
          <Service/>
          <div className='usInfo'>
            <FormContactUs/>
            <Contacts/>
          </div>
        </div>
        {isAlert && <Alert/>}
      </div>
    </AlertContext.Provider>
  )
}

export default App
