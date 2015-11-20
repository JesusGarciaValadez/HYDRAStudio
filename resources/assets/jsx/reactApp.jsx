"use strict"
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
        <SimpleListRow simpleList={this.state.simpleList} />
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
    return (
      <ol>
        {rows.map(function(element) {
          return (
            <li>{element.row}</li>
          );
        })}
      </ol>
    );
  }
});

// Renderea el componente principal pasando la url del archivo json externo y el id del elemento que contendrá el
// componente
React.render(
  <SimpleList url='js/simpleList_data.json' />,
  document.getElementById('simpleList')
)