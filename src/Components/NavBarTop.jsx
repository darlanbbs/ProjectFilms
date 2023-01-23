import styled from './NavBarTop.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { useState } from 'react';

export function NavBarTop(args) {

  const [search,setSearch] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }
  return (
    <div className={styled.container}>
      <Navbar {...args} className={styled.navBar}>
        <div className={styled.logo}>
        <NavLink to='/home' className={styled.link}>
            <i className="bi bi-film"></i>
            <div>Project Films</div>
          </NavLink> 
        </div>
          <Nav className="me-auto" navbar>
          </Nav>
          <form onSubmit={handleSubmit} action="" className={styled.search_bar}>
	          <input type="search" name="Search" placeholder='Search a film' pattern=".*\S.*" required value={search} onChange={(e) => setSearch(e.target.value)}/>
	          <button className={styled.search_btn}type="submit" ><span>Search</span></button>
          </form>
      </Navbar>
    </div>
  );
}

