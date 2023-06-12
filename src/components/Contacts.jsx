function Contacts() {
    return (
        <div className='contacts'>
            <div className="h1" style={{textAlign: "center"}}>Контакты</div>
            <div className="contactsItem">
                <div className="h2">ИП Сатонин Владислав Юрьевич</div>
                <div className="h2">ИНН: 702000669411</div>
                <div className="h2">Телефон: <a className='link' href="tel:+79646334444">+7-964-633-44-44</a></div>
                <div className="h2">Электронная почта: <a className='link' href="mailto:89062781675vlad@mail.ru">89062781675vlad@mail.ru</a></div>
            </div>
        </div>
    );
}

export default Contacts;