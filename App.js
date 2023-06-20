import React from 'react';
import './assets/css/App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';



import montana from './assets/images/azul/montañass.png';

import montanaFondo from './assets/images/azul/montañasFondo.png';

import montanaMedioFondo1 from './assets/images/azul/montañasMedioFondo1.png';
import montanaMedioFondo1_1 from './assets/images/azul/montañasMedioFondo1_1.png';
import montanaMedioFondo2 from './assets/images/azul/montañasMedioFondo2.png';

import peñascoIzq from './assets/images/azul/peñascoIzquierdo1.png';
import peñascoDer from './assets/images/azul/peñascoDerecho1.png';

import montanaMedio1 from './assets/images/azul/montañasMedio1.png';
import montanaMedio2 from './assets/images/azul/montañasMedio2.png';
import montanaMedio3 from './assets/images/azul/montañasMedio3.png';

//import Prueba from './components/Prueba';


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




      <Parallax pages={4.1} class='contenidoParalax' >
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
        {/*------------------ Montañas fondo --------------*/}
        <ParallaxLayer
          offset={1.3}
          speed={0.3}
          factor={0.7}
          style={{
            backgroundImage: `	url(${montanaFondo})`,
            backgroundSize: 'contain',
            margin: '0 auto'
          }}
        >
        </ParallaxLayer>


        {/*------------------ Titulo --------------*/}
        <ParallaxLayer
          offset={0.2}
          speed={-1.5}
          factor={0.7}
        >
          <h2 style={{
            fontSize: '80px',
          }}>Descubre un mundo nuevo</h2>
        </ParallaxLayer>

        {/*------------------ Montañas principales --------------*/}
        <ParallaxLayer
          offset={0.5}
          speed={-0.01}
          factor={1.4}
          style={{
            backgroundImage: `	url(${montana})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
          }} >
        </ParallaxLayer>




        {/*------------------ Montañas pequeñas medio-fondo --------------*/}
        <ParallaxLayer
          offset={1.4}
          speed={0.1}
          factor={0.7}
          style={{
            backgroundImage: `	url(${montanaMedioFondo1})`,
            backgroundSize: 'contain',

            width: '90%',
            margin: '0 auto 0 0',
          }}
        >
        </ParallaxLayer>


        {/*------------------ Montañas pequeñas medio-fondo --------------*/}
        <ParallaxLayer
          offset={1.82}
          speed={0.3}
          factor={3}
          style={{
            backgroundImage: `	url(${montanaMedioFondo1_1})`,
            backgroundSize: 'contain',

            width: '70%',
            margin: '0 auto',
          }}
        >
        </ParallaxLayer>




        {/*------------------ Montañitas medio fondo --------------*/}
        <ParallaxLayer
          offset={1.99}
          speed={0.01}
          factor={1}
          style={{
            backgroundImage: `	url(${montanaMedioFondo2})`,
            backgroundSize: 'contain',
            width: '60%',
            margin: '0 auto'
          }}
        >
        </ParallaxLayer>





        {/*------------------ Montañitas medio fondo --------------*/}
        <ParallaxLayer
          offset={2.05}
          speed={0.01}
          factor={1.9}
          style={{
            backgroundImage: `	url(${montanaMedioFondo2})`,
            backgroundSize: 'contain',
            width: '90%',
            margin: '0 auto 0 0'
          }}
        >
        </ParallaxLayer>







        {/*------------------ Montañas medio fondo derecha--------------*/}
        <ParallaxLayer
          offset={1.4}
          speed={0.3}
          factor={1.9}
          style={{
            backgroundImage: `	url(${montanaMedio2})`,
            backgroundSize: 'cover',
            width: '50%',
            marginLeft: 'auto'
          }}
        >
        </ParallaxLayer>


        {/*------------------ Montañas medio fondo izquierda--------------*/}
        <ParallaxLayer
          offset={1.6}
          speed={0.5}
          factor={1.5}
          style={{
            backgroundImage: `	url(${montanaMedio3})`,
            backgroundSize: 'cover',
            width: '40%',
            marginright: 'auto'
          }}
        >
        </ParallaxLayer>






        {/*-------  ----------- Montañas medio fondo --------------*/}
        <ParallaxLayer
            offset={2.3}
            speed={0.2}
            factor={2}
            style={{
              backgroundImage: `	url(${montanaFondo})`,
              backgroundSize: 'contain',
              marginLeft: 'auto',
            }}
          >
        </ParallaxLayer>


        {/*-------  ----------- Montañas medio fondo --------------*/}
        <ParallaxLayer
          offset={2.2}
          speed={0.3}
          factor={.8}
          style={{
            backgroundImage: `	url(${montanaFondo})`,
            backgroundSize: 'contain',
          }}
        >
        </ParallaxLayer>











        {/*------------------ Peñasco Izquierdo --------------*/}
        <ParallaxLayer
          offset={1.7}
          speed={0.7}
          factor={1.85}
          style={{
            backgroundImage: `	url(${peñascoIzq})`,
            backgroundSize: 'cover',
            width: '65%',
            marginright: 'auto',
          }}
        >
        </ParallaxLayer>
        {/* ------------------ Peñasco Derecho -------------- */}
        <ParallaxLayer
          offset={1.7}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `	url(${peñascoDer})`,
            backgroundSize: 'cover',
            width: '65%',
            marginLeft: 'auto',
          }}
        >


        </ParallaxLayer>



        {/*------------------ Texto prueba--------------*/}
        <ParallaxLayer
          offset={1.99}
          speed={0.05}
          factor={0.7}
        >



          <div class="card" >
            <h1 class="title">Strange but true – there are 12 times more trees on Earth than stars in the Milky Way!</h1>
            <p class="text">Scientists estimate there are between 200 – 400 billion stars in our galaxy while there are an estimated 1 trillion trees on Earth! Like the stars, trees live a long time and are truly important for life. Check out a related blog you might like .</p>
          </div>



        </ParallaxLayer>



        {/*------------------ Segunda Seccion--------------*/}
        <ParallaxLayer
          offset={2.7}
          speed={0.07}
          factor={4}
        >
          <div class="secondSection" > </div>
        </ParallaxLayer>

        {/*------------------ Texto Segunda Seccion--------------*/}
        <ParallaxLayer
          offset={3.1}
          speed={0.3}
          factor={4}
        >
          <div className='row'>
            <div className='col-6'>

            <h1 class="row col-10 mx-auto">Strange but true – there are 12 times more trees on Earth than stars in the Milky Way!</h1>
            <p class="col-10 mx-auto">Scientists estimate there are between 200 – 400 billion stars in our galaxy while there are an estimated 1 trillion trees on Earth! Like the stars, trees live a long time and are truly important for life. Check out a related blog you might like .</p>


            </div>

            <div className='col-6'>

            <h1 class="row col-10 mx-auto">Strange but true – there are 12 times more trees on Earth than stars in the Milky Way!</h1>
            <p class="col-10 mx-auto">Scientists estimate there are between 200 – 400 billion stars in our galaxy while there are an estimated 1 trillion trees on Earth! Like the stars, trees live a long time and are truly important for life. Check out a related blog you might like .</p>


            </div>

          </div>
        </ParallaxLayer>



      </Parallax>





    </div>




  );


}

export default App; 