
import "../css/navCss.css";



const Footer = () => {
    const date = new Date();
    const yearDate = date.getFullYear();
   
    
    const formattedLastModified = new Date(document.lastModified).toLocaleDateString("en-Us", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });


    return ( 
        <>
        <div className="footer">
            <p>All right reserved <span id="span">{yearDate}</span>   &copy;  | Last Updated : <span id="span">{formattedLastModified}</span></p>
            <p>Data Provided by <a href="https://www.themoviedb.org/">The Movie Database</a></p>
            <p>Gustavo Bispo </p>
        </div>
        
        </>
     );
}
 
export default Footer;