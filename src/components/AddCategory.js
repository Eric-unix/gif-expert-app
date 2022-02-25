import React from "react"
export const AddCategory = () => {

    const [inputValue, setInpputValue] = useState('Hola mundo')

    const handleInputChange = (e) => {
        setInpputValue(e.target.value);
    }


    return (
        <form onSubmit>
             <input
                type='text'
                value={setInpputValue}
                onChange={handleInputChange}
                />      
        </form>
    )
}