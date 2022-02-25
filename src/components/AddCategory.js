import React from "react"
import PropType from 'prop-types';

export const AddCategory = () => {

    const [inputValue, setInpputValue] = useState('Hola mundo')

    const handleInputChange = (e) => {
        setInpputValue(e.target.value);
    }

    const handleSubmiy = (e) =>{
        e.preventDefault();

        if (inputValue( cats => [...cats, inputValue]));
        setInpputValue('');
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



AddCategory.PropType = {
    setCategories: PropType.func.isRequired
}