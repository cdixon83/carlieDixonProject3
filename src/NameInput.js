

const NameInput = ({handleNameChange, nameInput}) => {
    return (
        <>
            <label htmlFor="name">Name:</label>
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