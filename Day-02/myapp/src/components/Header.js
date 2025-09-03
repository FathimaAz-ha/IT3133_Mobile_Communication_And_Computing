import Logo from './Logo'
function Header(props){
    
/* There are 3 ways to integrate the CSS in react 
1. Inline Style
2. Internal
3. External
*/ 

//option 2 - You can define it as a variable and call it in side the tag -- applied in the footer 
//option 3 - you can use it as an external file and import it for the use - applied in the body

    return(
        //option 1
        
        <div style={{backgroundColor:'#004030', height: '100px', padding: '50px', color:'#FFF'}}> 
        <Logo />
            <center><h1>{props.content}</h1></center>
             <center><h2>{props.value}</h2></center>
        </div>
    )
}

export default Header