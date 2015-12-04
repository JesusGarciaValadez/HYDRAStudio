<!DOCTYPE html>
<html>
<head>
  <title>Curso Platzi - React.js</title>

  <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

  <style>
    html, body {
      height: 100%;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100%;
      display: table;
      font-weight: 100;
      font-family: 'Lato';
    }

    .container {
      text-align: center;
      display: table-cell;
      vertical-align: middle;
    }

    .content {
      text-align: center;
      display: inline-block;
    }

    .title {
      font-size: 96px;
    }
  </style>

  <link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body>
  <section id="container"></section>

  <script src="http://fb.me/react-0.13.3.js"></script>
  <script src="http://fb.me/JSXTransformer-0.13.3.js"></script>
  <script type="text/jsx;harmony=true">
    class HelloWorldComponent extends React.Component {
      render () {
        return <h1>{this.props.name} evoluciona en nivel {this.props.level}</h1>
      }
    }

    HelloWorldComponent.propTypes = {
      name: React.PropTypes.string,
      level: React.PropTypes.number
    };

    React.render(
      <HelloWorldComponent name="Pikachu" level={25} />,
      document.getElementById( 'container' )
    );
  </script>
</body>
</html>
