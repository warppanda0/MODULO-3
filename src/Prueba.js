import React from 'react';

function Prueba(props){
    return(
        <main>
             <div className="fondo">
                 <img src={props.imagenUrl} alt="michi"/>
                <p> {props.nombre} </p>
                <p> {props.color} </p>     
            </div>    
        </main>
    
    )
}

//  /* metodo 1*/
//    function Lista (datos){
//           return(
//                   <>
//                   <Prueba nombre={CAT[0].nombre} imagenUrl="https://pbs.twimg.com/profile_images/1284744444600877057/16h9pXEq_400x400.jpg"/>
//                   <Prueba nombre={CAT[1].nombre} imagenUrl="https://pbs.twimg.com/profile_images/1155768449400025088/kA9iAu8Q_400x400.jpg"/>
//                   <Prueba nombre={CAT[2].nombre} imagenUrl="https://i.pinimg.com/280x280_RS/29/a5/92/29a5926a3de35ada8d165cf56fe2536a.jpg"/>
//                   <Prueba nombre={CAT[3].nombre} imagenUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCfeEydjOPrFWt0szelia3-I9g9tNtHnmPg&usqp=CAU"/>
//                   </>
//               )
//   }

    /*metodo 2*/
    
 export default function App(){
 return(
     <div>
         <h1>Mascotas perronastunas</h1>
         <Lista array={CAT} />
     </div>
 )
 }

function Lista (datos){
     return(
         <>
         {datos.array.map((gatito)=>{
             const{nombre,imagenUrl} = gatito;
             return(
                 <Prueba nombre={nombre} imagenUrl=
                 {imagenUrl} />           
             )          
         })}
         </>
     )
 }
const CAT = [
    {
        id:21,
        nombre:"SEVEN",
        imagenUrl: "https://pbs.twimg.com/profile_images/1284744444600877057/16h9pXEq_400x400.jpg"
    },
    {
        id:20,
        nombre:"DUKO",
        imagenUrl: "https://pbs.twimg.com/profile_images/1155768449400025088/kA9iAu8Q_400x400.jpg"
    },
    {
        id:45,
        nombre:"NASHE",
        imagenUrl: "https://i.pinimg.com/280x280_RS/29/a5/92/29a5926a3de35ada8d165cf56fe2536a.jpg"
    },
    {
        id:213,
        nombre:"ROBERTO",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCfeEydjOPrFWt0szelia3-I9g9tNtHnmPg&usqp=CAU"
    },

]

console.log(CAT[0].imagenUrl, CAT[0].nombre)
console.log(CAT[1].imagenUrl, CAT[1].nombre)
console.log(CAT[2].imagenUrl, CAT[2].nombre)
console.log(CAT[3].imagenUrl, CAT[3].nombre)