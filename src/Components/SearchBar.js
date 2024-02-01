import { useState } from 'react'
import './searchBar.css'
function Searchbar({ onSubmit }) {

    const [term, setTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(
            term
        )
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    return (
        <div>
            <form className='search-bar form' onSubmit={handleSubmit}>
                <label>Enter Search Value : </label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}
export default Searchbar;