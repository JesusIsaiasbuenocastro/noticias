import React,{Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';


function App() {

  //definir la categoria y noticias
  const [ categoria, guardarCategoria] =useState ('');
  const [ noticias, guardarNoticias] =useState ([]);

  //se ejecuta cuando detecta un cambio en el componente 
  useEffect(()=>{
    const apiKey ="6670a77343744a27b970959b3310c5af";
    const consultarAPI = async () =>{
      const url =`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();

  },[categoria]);

  return (
      <Fragment>
          <Header titulo='Buscador de noticias' />
          <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />
            <ListadoNoticias 
                noticias ={noticias}
            />
          </div>
      </Fragment>
  );
}

export default App;
