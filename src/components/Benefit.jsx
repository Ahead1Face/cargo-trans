/* eslint-disable react/prop-types */
function Benefit({ benefits, title}) {
    return ( 
        <div className='benefit'>
            <div className='h1'>{title}</div>
            <ul>
                {benefits.map(i => 
                    <li key={i.name} className="benefitItem">{i.name}</li>
                )}
            </ul>
        </div>
     );
}

export default Benefit;