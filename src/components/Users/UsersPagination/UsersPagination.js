import React, { useEffect, useState } from 'react'
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
const PAGE_SIZE = 10


const UsersPagination = ({setLoad, totalCount, page, getCurrentPage, portionNumber, setPortionNumber}) => {
    
    const [pages, setPages] = useState([])
    let pagesCount = Math.ceil(totalCount / PAGE_SIZE)
    let prevPortionNumber = (portionNumber - 1) * PAGE_SIZE + 1
    let nextPortionNumber = portionNumber  * PAGE_SIZE 

   
 
    const getCurrent = (event, page, portionNum) => {
        event.preventDefault()
        setLoad(true)
        getCurrentPage(page)
        setTimeout(() => setLoad(false), 500)
        setPortionNumber(portionNum)
    }
    const pushPages = () => {
        for (let index = 1; index < pagesCount; index++) {
            setPages(prev => [...prev, index])
        }
    }
    useEffect(() => {
        pushPages()
    }, [])


    const pagesArray = pages
        .filter(page => page >= prevPortionNumber && page <= nextPortionNumber)
        .map(num => <button key={num} onClick={(event) => getCurrent(event, num, portionNumber)} className={num === page ? 'pagination active' : 'pagination'}>{num}</button>)




  return (
    <div className='users__pagination'>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className='pagination'><GrPrevious/></button>}    

        <div className='pagination__numbers'>{pagesArray}</div>

        {pagesCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} className='pagination'><GrNext/></button>} 
    </div>
  )
}

export default UsersPagination