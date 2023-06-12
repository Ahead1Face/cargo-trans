import './InputForm.css';

// eslint-disable-next-line react/prop-types
function InputForm({children, name}) {
    return ( 
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name={name} id={name} required />
            <label htmlFor={name} className="form__label">{children}</label>
        </div>
     );
}

export default InputForm;