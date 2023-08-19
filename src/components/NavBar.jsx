import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import{BiCameraMovie, BiSearchAlt2,BiMenu} from "react-icons/bi"
import "../css/navCss.css";
=======
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import "./navCss.css";
>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20
import { useState } from "react";


const NavBar = () => {
    const[search,setSearch] = useState("");
    const[navActive, setNavActive]= useState(false);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(search)

      if(!search) return;
      navigate(`search?q=${search}`);
      setSearch("");
    }

    const handleToggleMenu=()=>{
      setNavActive(!navActive)
      console.log("aa")

    }
    
    return ( 
      <nav className="navBar">
      <div className="comp">
        <h2>
          <Link to="/" >
            <BiCameraMovie />
            Movies Library
          </Link>
        </h2>
        <button id="button" onClick={handleToggleMenu}><BiMenu /></button>
        
<<<<<<< HEAD
      </div>
      <div className="newSearch">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder=" Search for a movie" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button type="submit"><BiSearchAlt2 /></button>
            <Link to="/search"></Link>
          </form>
      </div>
      
      <div className={`catalog ${navActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/myfavorite">My Favorite</Link>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)} value={search} />
          <button type="submit"><BiSearchAlt2 /></button>
          <Link to="/search"></Link>
        </form>
      </div>
    </nav>
=======
        <nav className="navBar">
          <h2 className="comp">
            <Link to="/" > <BiCameraMovie></BiCameraMovie>
            Movies Library </Link>
          </h2>
          {/* <Link to="/movies/1"></Link> */}
         
          <div className="catalog">
            <Link to="/">Home</Link>
            <Link to="/myfavorite">My Favorite</Link>
            
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Search for a movie" onChange={(e)=> setSearch(e.target.value)}
              value={search}/>
              <button type="submit"><BiSearchAlt2></BiSearchAlt2></button>
              <Link to ="/search"></Link>
            </form>
          </div>

         
          
         
        </nav>
        
>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20
       
    
     );
}
 
export default NavBar;