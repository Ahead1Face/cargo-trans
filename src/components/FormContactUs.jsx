import { useContext, useRef } from "react";
import InputForm from "./UI/input/InputForm";
import ButtonForm from "./UI/button/ButtonForm";
import emailjs from '@emailjs/browser';
import TextareaForm from "./UI/textarea/TextareaForm";
import { AlertContext } from "../context";

function FormContactUs() {
    const form = useRef();
    const { setIsAlert } = useContext(AlertContext);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wnd04mr', 'template_wtyg7rs', form.current, 'YfEl4COemT1qjwMwO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset();
        setIsAlert(true);
      };
    return ( 
        <form ref={form} onSubmit={sendEmail}>
            <div className="h1">Свяжитесь с нами</div>
            <InputForm name='user_name'>Имя</InputForm>
            <InputForm name='user_tel'>Номер телефона</InputForm>
            <TextareaForm name='user_massege'/>
            <ButtonForm type='submit'>Отправить</ButtonForm>
        </form>
     );
}

export default FormContactUs;