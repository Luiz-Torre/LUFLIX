import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  
  const valoresIniciais = {
    nome : '',
    descricao : '',
    cor : '',
  }
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,

    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria : {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
         infosDoEvento.preventDefault();
         setCategorias([
           ...categorias,
           values
         ]);
         
        }}>
        <div>
        <FormField 
               type="text"
               name="nome"
               value={values.nome}
               onChange={handleChange}
               placeholder = "Nome da Categoria"


          />
          
          
        </div>
        <p></p> 
        
        <div>
        <FormField 
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          placeholder = "Descrição"

          />
        </div>
              
        <div>
        <FormField
          type="color"
          name="cor"
          value={values.cor}
          placeholder = "Descrição"
          onChange={handleChange}
        />
        </div>


        <button>
          Cadastrar
        </button>
      </form>
      



      <div>
  
        <ul>{categorias.map((categoria)=> {
        return(
            <li key={categoria}>
              {categoria.nome}
           </li>)
          })}
        </ul>
        <Link to="/">
        Ir para home
        </Link>
      </div>
    </PageDefault>
  )
}

export default CadastroCategoria;