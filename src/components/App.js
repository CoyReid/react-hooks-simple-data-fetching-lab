import React, { useState, useEffect} from "react";

function App() {
    const [dog, setDog] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((pic) => setDog(pic.message))
    }, [])

    if (!dog) return <p>Loading...</p>
    
    return (
        <img src={dog} alt="A Random Dog"/>
    )
}

export default App;
