import { Filters } from './Filters.jsx'
import "../public/css/HomePage.css"

export function Header ({ }) {
    return (
        <header className='header'>
            <h1>Tienda Online </h1>
            <Filters />
        </header>
    )
}