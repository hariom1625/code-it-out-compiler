import React from 'react';
import './App.css';
import Compiler from './components/Compiler.js';
import Footer from './components/Footer.js';
import ParticlesBg from 'particles-bg'




class App extends React.Component{
  render(){
        const config={
        position : {width:100,height:30},

        };

return(

<div className="home">
<div>
      <ParticlesBg type="polygon" config={config} bg={true} />

</div>


<h2 className="home-heading-1"><i className="fas code-home fa-code"></i>Code</h2>
      <h2 className="home-heading-2"> <i class="fas  code-home fa-cogs"></i>    Run</h2>

            <h1 className="home-heading-3">  Compile   </h1>


                  <h3 className="home-heading-4">  "If you lie to the compiler, it will have its revenge." <br/> <br/> <h4 className="quote-name">— Henry Spencer.</h4>   </h3>


<Compiler/>
<Footer/>

</div>

  );
}
}

export default App;
