import header from "../assets/header.jpg";

const Header = () => {

    return (
        <>
            <h1>Good Vibes Only</h1>
            <div className="imgContainer">
                <img src={header} alt="Neon Rainbow Heart." />
            </div>
        </>
    )
}

export default Header;