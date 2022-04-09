import { Link } from 'react-router-dom'
import { FaSistrix } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'


const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="search-group">
          <input type="text" name="search" id="search" placeholder="Ask us any question" /> 
          <button className="icon">
            <FaSistrix />
          </button>
        </div>
        <div className="right">
          <div className="icon">
            <FaRegBell />
          </div>
          <div className="line"></div>
          <div className="avatar">
            <div className="circle"></div>
            <FaChevronDown className='down'/>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav-item">
          <a href="/">Efficiency</a>
        </div>
        <div className="nav-item">
          <a href="/"> Volume</a>
        </div>
        <div className="nav-item">
          <a href="/">Customer Satisfaction</a>
        </div> 
        <div className="nav-item">
          <a href="/">Backlog</a>
        </div>
      </div>
      <div className="main-header">
        <h1> Efficency Analytics </h1>
        <div className="esearch">
          <button>
            <FaSistrix className='esearch-icon'/>
          </button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}

export default Header