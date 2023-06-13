import React from 'react';
import montana from './rojo/montañass.png';
import escena1 from './rojo/escena1.jpg';
import peñasco1 from './rojo/peñascoDerecho1.png';
import peñascoIzq from './rojo/peñascoIzquierdo1.png';
import montanaFondo from './rojo/montañasFondo.png';
import montanaFondo1 from './rojo/montañasFondo1.png';
import montanaFondo2 from './rojo/montañasFondo2.png';

import montanaEscena1 from './rojo/montañasPaisaje1.png';
import montanaEscena2 from './rojo/montañasPaisaje2.png';
import montanaEscena3 from './rojo/montañasPaisaje3.png';






import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (


    <div style={{maxWidth:'2050px', 
                  margin:'0 auto',
                  overflow:'hidden'}}>
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
          style={{
            backgroundImage: `	url(${montanaFondo2})`,
            backgroundSize: 'contain',
            margin: '0 auto'
          }}
          factor={0.7}
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
          speed={0.01  }
          style={{
            backgroundImage: `	url(${montanaFondo1})`,
            backgroundSize: 'contain',
            
            width: '90%',
            margin: '0 auto 0 0',
            
          }}
          factor={0.7}
          class="prueba"
        >


      {/* <div className="container">
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
      </div> */}

        </ParallaxLayer>
        {/*------------------ Montañas escena --------------*/}
        <ParallaxLayer 
          offset={1.4} 
          speed={0.3 }
          style={{
            backgroundImage: `	url(${montanaEscena2})`,
            backgroundSize: 'cover',
            width:'50%',
            marginLeft:'auto'
          }}
          factor={1.5}
        >
        </ParallaxLayer>
        {/*------------------ Montañas escena --------------*/}
        <ParallaxLayer 
          offset={1.8} 
          speed={0.5 }
          style={{
            backgroundImage: `	url(${montanaEscena3})`,
            backgroundSize: 'cover',
            width:'40%',
            marginright:'auto'
          }}
          factor={1.2}
        >
        </ParallaxLayer>
        {/*------------------ Montañitas escena --------------*/}
        <ParallaxLayer 
          offset={2.8} 
          speed={0.5 }
          style={{
            backgroundImage: `	url(${montanaFondo})`,
            backgroundSize: 'contain',
            width:'80%',
            margin:'0 auto'
          }}
          factor={1}
        >
        </ParallaxLayer>
        {/*-------  ----------- Montañas escena --------------*/}
        <ParallaxLayer 
          offset={1.8} 
          speed={0.03 }
          style={{
            backgroundImage: `	url(${montanaEscena1})`,
            backgroundSize: 'cover',
            alignContent:'center'
          }}
          factor={1.4}
        >
        </ParallaxLayer>
        {/*------------------ Peñasco Izquierdo --------------*/}
        <ParallaxLayer 
          offset={1.9} 
          speed={0.7 }
          style={{
            backgroundImage: `	url(${peñascoIzq})`,
            backgroundSize: 'cover',
            width: '65%',
            marginright:'auto',
          }}
          factor={2}
        >
        </ParallaxLayer>
        {/* ------------------ Peñasco Derecho -------------- */}
        <ParallaxLayer 
          offset={1.9} 
          speed={1.2 }
          style={{
            backgroundImage: `	url(${peñasco1})`,
            backgroundSize: 'cover',
            width: '65%',
            marginLeft:'auto',
          }}
          factor={1.8}
        >


        </ParallaxLayer>
      </Parallax>

        <div>
          <h3>totiñp dekbakp</h3>
        </div>

      
    </div>




    



  );
}

export default App;
