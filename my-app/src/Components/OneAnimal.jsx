import { useState } from "react";

function OneAnimal({ fieldAnimal, goHome, addWeight }) {

    const [weight, setWeight] = useState('');

    const handleWeight = e => {
        setWeight(e.target.value);
    }

    const submitWeight = () => {
        addWeight(fieldAnimal.id, weight)
        setWeight('');
    }
    return (
        <>
            <h2>No.:{fieldAnimal.id} Weight: {fieldAnimal.weight}</h2>
            <input type="text" onChange={handleWeight} value={weight} />
            <button onClick={submitWeight}>set weight</button>
            <button onClick={() => goHome(fieldAnimal.id)}>Kill</button>
        </>
    );

}

export default OneAnimal;