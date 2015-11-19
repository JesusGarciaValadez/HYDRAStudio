"use strict"

// Componente principal SimpleFilterableList
var SimpleFilterableList  = React.createClass( {
  // Define el estado inicial de la aplicación. Input del usuario = Ninguno
  getInitialState: function() {
    return {
      userInput: ""
    };
  },
  // Actualiza el estado de la aplicación de acuerdo al input del usuario.
  updateUserInput: function(input){
    console.log('_________________');
    console.log('User search input:');
    console.log(input.target.value);
    this.setState({userInput: input.target.value});
  },
  // Define el markup del componente principal
  // Cuando el usuario escribe algo, ejecuta la función updateUserInput
  // Define el componente SimpleList con la url dada y el estado del input del usuario
  render: function(){
    return (
      <div>
        <input type='text' placeholder='Filtrar...' onChange={this.updateUserInput}></input>
        <SimpleList url={this.props.url} userInput={this.state.userInput}/>
      </div>
    );
  }
} );

var SimpleList = React.createClass( {
  // Define el estado inicial del componente con el texto "Cargando ..."
  getInitialState: function() {
    return {
      simpleList: [
        {
          row: 'cargando  ...'
        }
      ]
    };
  },
  // Cuando se termine de mostrar el componente ejecuta una función ajax para obtener datos de un archivo json externo
  componentDidMount: function() {
    $.ajax( {
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        console.log('_________________');
        console.log('Simple List data recieved:');
        console.log(data);
        // Actualiza el estado del componente con los datos obtenidos del archivo json externo
        this.setState({simpleList: data});
      }.bind(this),
        error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    } );
  },
  // Define el markup del componente principal
  // Define el componente SimpleListRow con el estado por default del componente y el input del usuario que en
  // este momento esta vacío.
  render: function() {
    return (
      <span>
        <p><strong>Pasos para dominar un nuevo lenguaje de programación:</strong></p>
        <SimpleListRow simpleList={this.state.simpleList} userInput={this.props.userInput}/>
      </span>
    );
  }
} );

var SimpleListRow = React.createClass({
  render: function() {
    console.log('_________________');
    console.log('simpleList rows props:');
    console.log(this.props);
    var rows = this.props.simpleList;
    var userInput = this.props.userInput;
    return (
      <ol>
        {rows.map(function(element)
          {if (element.row.toLowerCase().search(userInput.toLowerCase()) > -1){
            console.log("userInput found in simpleList row: "+element.row);
            return (
              <li>{element.row}</li>
            );
          };
        })}
      </ol>
    );
  }
});

// Renderea el componente principal pasando la url del archivo json externo y el id del elemento que contendrá el
// componente
React.render(
  <SimpleFilterableList url='js/simpleList_data.json'/>,
  document.getElementById('simpleList')
)