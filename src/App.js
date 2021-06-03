import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;



// Es un slider basico, donde hay 3 botones, uno de Restart, Prev y Next, una pantalla donde hay un title y un text
// Lo que tienen que hacer es
// 1. al inciiar la app, se debe mostrar el primer slide.
// 2. al apretar el boton next, mostrarte el siguiente slide
// 3. al apretar el boton prev, mostrarte el anterior slide
// 4. al apretar Restart, mostrar el primer slide

// Con lo sgtes requerimientos
// si se esta en el primer slide, el boton Restart y Prev debe estar bloqueado usen "disabled como prop"
// si se esta en el ultimo slide, el boton Next debe estar bloqueado

