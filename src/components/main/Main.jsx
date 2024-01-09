import React from 'react'
import Pagination from '../pagination/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort, faDownload,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
 
import './main.css' 
const Main = () => {
  return (
    <div className='main-content'>
    <div className="main-head">
        <h3>Transactions | This Month</h3>
    </div>
    <div className="big-box">
        <div className="top-bar">
            <div className="search-bar-main">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-main'/>
            <input type="text" className='top-search' placeholder='Search by order ID...'/>
            </div>
            <div className="main-content-btns">
            <button className='sort'>Sort <FontAwesomeIcon icon={faArrowDownWideShort} /></button>
            <button className='download'><FontAwesomeIcon icon={faDownload} className='dwnld'/></button>
            </div>
        </div>
        <table className="main-table">
            <thead>
                <tr> 
                    <th className='one'>Order ID</th>
                    <th className='two'>Order date</th>
                    <th className='three'>Order amount</th>
                    <th className='four'>Transaction fees <span>ⓘ</span> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>
                <tr>
                    <td className='order-id'>#281209</td>
                    <td className='order-date'>7 July, 2023</td>
                    <td className='order-amt'>₹1,278.23</td>
                    <td className='tranxn-fees'>₹22</td>
                </tr>

            </tbody>
        </table>
        <Pagination/>
    </div>
    </div>
  )
}

export default Main