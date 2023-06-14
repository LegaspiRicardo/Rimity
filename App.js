import React from 'react';
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';



import montana from './rojo/montañass.png';

import montanaFondo from './rojo/montañasFondo.png';
import montanaFondo1 from './rojo/montañasFondo1.png';
import montanaFondo2 from './rojo/montañasFondo2.png';

import peñascoIzq from './rojo/peñascoIzquierdo1.png';
import peñascoDer from './rojo/peñascoDerecho1.png';

import montanaMedio1 from './rojo/montañasMedio1.png';
import montanaMedio2 from './rojo/montañasMedio2.png';
import montanaMedio3 from './rojo/montañasMedio3.png';



function App() {
  return (


    <div>
      


      {/* <div class="container">
        <h3>HTML and Bootstrap Section</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="alert alert-success" role="alert">
              This is a Bootstrap alert in the additional section.
            </div>
          </div>
          <div className="col-md-6">
            <button className="btn btn-danger">Bootstrap Button</button>
          </div>
        </div>
      </div>  */}




      <Parallax pages={3.1}  class='contenidoParalax' >
        {/*------------------ ESTRELLAS --------------*/}
        <ParallaxLayer 
          offset={0} 
          speed={0.001}
          >
          <div class="bg">
            <div class="star-field">
              <div class="layer"></div>
              <div class="layer"></div>
              <div class="layer"></div>
            </div>
          </div>
        </ParallaxLayer>
        {/*------------------ Montañas pequeñas fondo --------------*/}
        <ParallaxLayer 
          offset={1.5} 
          speed={0.3 }
          factor={0.7}
          style={{
            backgroundImage: `	url(${montanaFondo2})`,
            backgroundSize: 'contain',
            margin: '0 auto'
          }}
        >          
        </ParallaxLayer>
        {/*------------------ Montañas principales --------------*/}
        <ParallaxLayer 
            offset={0.5} 
            speed={-0.01}
            factor={1.3}
            style={{
              backgroundImage:	`	url(${montana})`,
              backgroundSize: 'cover',
          }} >
            
        <h2>Descubre un mundo nuevo</h2>
        </ParallaxLayer>

        {/*------------------ Montañas pequeñas medio-fondo --------------*/}
        <ParallaxLayer 
          offset={1.5} 
          speed={0.01 }
          factor={0.7}
          style={{
            backgroundImage: `	url(${montanaFondo1})`,
            backgroundSize: 'contain',
            
            width: '90%',
            margin: '0 auto 0 0',
          }}
        >
        </ParallaxLayer>
        {/*------------------ Montañas medio fondo derecha--------------*/}
        <ParallaxLayer 
          offset={1.4} 
          speed={0.3}
          factor={1.5}
          style={{
            backgroundImage: `	url(${montanaMedio2})`,
            backgroundSize: 'cover',
            width:'50%',
            marginLeft:'auto'
          }}
        >
        </ParallaxLayer>
        {/*------------------ Montañas medio fondo izquierda--------------*/}
        <ParallaxLayer 
          offset={1.8} 
          speed={0.5}
          factor={1.2}
          style={{
            backgroundImage: `	url(${montanaMedio3})`,
            backgroundSize: 'cover',
            width:'40%',
            marginright:'auto'
          }}
        >
        </ParallaxLayer>
        {/*------------------ Montañitas medio fondo --------------*/}
        <ParallaxLayer 
          offset={2.8} 
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `	url(${montanaFondo})`,
            backgroundSize: 'contain',
            width:'80%',
            margin:'0 auto'
          }}
        >
        </ParallaxLayer>
        {/*-------  ----------- Montañas medio fondo --------------*/}
        <ParallaxLayer 
          offset={2} 
          speed={0.03}
          factor={.8}
          style={{
            backgroundImage: `	url(${montanaFondo})`,
            backgroundSize: 'contain',
          }}
        >
        </ParallaxLayer>
        {/*-------  ----------- Montañas medio fondo --------------*/}
        <ParallaxLayer 
          offset={1.8} 
          speed={0.03}
          factor={1.4}
          style={{
            backgroundImage: `	url(${montanaMedio1})`,
            backgroundSize: 'cover',
            alignContent:'center'
          }}
        >
        </ParallaxLayer>




        {/*------------------ Peñasco Izquierdo --------------*/}
        <ParallaxLayer 
          offset={1.9} 
          speed={0.7}
          factor={2}
          style={{
              backgroundImage: `	url(${peñascoIzq})`,
              backgroundSize: 'cover',
              width: '65%',
              marginright:'auto',
              }}
        >
        </ParallaxLayer>
        {/* ------------------ Peñasco Derecho -------------- */}
        <ParallaxLayer 
          offset={1.9} 
          speed={1.2}
          factor={1.8}
          style={{
            backgroundImage: `	url(${peñascoDer})`,
            backgroundSize: 'cover',
            width: '65%',
            marginLeft:'auto',
          }}
        >


        </ParallaxLayer>
      </Parallax>

        




      
    </div>




    



  );
}

export default App;
