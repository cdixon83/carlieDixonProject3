const NameInput = ({handleNameChange, nameInput, name}) => {
    return (
        <>
            <label htmlFor="name">{name}</label>
            <input 
                type="text" 
                id="name" 
                onChange={handleNameChange}
                value={nameInput}
            />
        </>
    )
};

export default NameInput;