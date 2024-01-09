import React from 'react'
import './pagination.css'
const Pagination = () => {
  return (
    <div className='pagination'>
        <button className='prev-next'>Previous</button>
        <button className='page-btns'>1</button>
        <button className='dots'>...</button>
        <button className='page-btns'>10</button>
        <button className='page-btns'>11</button>
        <button className='page-btns'>12</button>
        <button className='page-btns'>13</button>
        <button className='page-btns'>14</button>
        <button className='page-btns'>15</button>
        <button className='page-btns'>16</button>
        <button className='page-btns'>17</button>
        <button className='page-btns'>18</button>
        <button className='prev-next'>Next</button>
    </div>
  )
}

export default Pagination