import './Hello.css'
export default function Hello({name="boo",surname="blue",weight=20}) { 
    return(
        <>
        <img src="Gengar.webp"width="300" alt="" />
         <h1>Hello,{name} 
                   {surname}
                   {weight}kg. 
         </h1>
        
        </>
    );  
}
