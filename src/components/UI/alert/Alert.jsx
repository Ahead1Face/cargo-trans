import { useContext } from 'react';
import ButtonForm from '../button/ButtonForm';
import './Alert.css';
import { AlertContext } from '../../../context';

function Alert() {
    const { setIsAlert } = useContext(AlertContext);

    return ( 
        <div className='alert' onClick={() => setIsAlert(false)}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <div>Отправлено!</div>
                <div>Скоро мы вам перезвоним</div>
                <ButtonForm onClick={() => setIsAlert(false)}>Закрыть</ButtonForm>
            </div>
        </div>
     );
}

export default Alert