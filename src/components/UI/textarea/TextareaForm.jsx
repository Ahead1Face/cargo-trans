import './TextareaForm.css';

// eslint-disable-next-line react/prop-types
function TextareaForm({name}) {
    return ( 
        <textarea 
            name={name} 
            placeholder='Дополнительная информация' 
            className='ta-form'
        >
        </textarea>
     );
}

export default TextareaForm;