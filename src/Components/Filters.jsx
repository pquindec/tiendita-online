import { useId } from 'react'
import '../public/css/Filters.css'
import { useFilters } from '../hooks/useFilters'


export function Filters( { }){

    const {filters, setFilters } = useFilters()
 
    const minPriceFilterId = useId()
    const categoryfilterId = useId()

    const handleChangeMinPrice = (event) => {
        
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div className='precio'>
                <label  htmlFor={minPriceFilterId}>Precio</label>
                <input 
                type="range" 
                id={minPriceFilterId} 
                min='0'
                max="1000"
                onChange={handleChangeMinPrice} 
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label className='category' htmlFor={ categoryfilterId }>Categoría</label>
                <select name="" id={ categoryfilterId } onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                    <option value="home-decoration">Hogar</option>
                </select>
            </div>
        </section>
    )
    
}