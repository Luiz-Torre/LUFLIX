import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageDefault>
       
        <body>
<form name="meu_form">

  <h1>Cadastro de Vídeo </h1>
  <label for="nome "> Nome : </label><p></p>
  <input type="text" id="nomeid" placeholder="Nome do Video" required="required" name="nome" />

  <p><label for="categoria">Categoria</label><p></p>
  <input type="text" id="categoriaid" placeholder="Temporada1" required="required" name="categoria" />
  
</p> <label for="url">URL</label><p></p>
  <input type="url" id="urlid" placeholder="www.youtube.com/" required="required" name="URL" />
 


  <p><input type="submit" class="enviar" onclick="Enviar();" value="Enviar" /></p>
</form>

</body>

      <p>
        
         <Link to ="/cadastro/categoria">
             Cadastrar Categoria
         </Link>
      </p>
      </PageDefault>
    )
  
  }

  export default CadastroVideo;