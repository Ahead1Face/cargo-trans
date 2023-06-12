import './ButtonForm.css';

// eslint-disable-next-line react/prop-types
function ButtonForm({children, ...props}) {
    return ( 
        <button {...props} className='btnForm'>
            {children}
        </button>
    );
}

export default ButtonForm;