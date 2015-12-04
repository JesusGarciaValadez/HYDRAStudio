<!DOCTYPE html>
<html>
  <head>
    <title>Usuario</title>
    <link href="css/styles.css" rel="stylesheet">
  </head>
  <body ng-app="app" ng-controller="user_ctrl as sesion">
    <header>
      <p>ReactJS and AngularJS</p>
    </header>
    <section>
      <article>
        <form>
          <fieldset>
            <legend>¿Como te llamas?</legend>
            <input type="text" ng-model="sesion.usuario.nombre"   placeholder="Nombre"/>
            <input type="text" ng-model="sesion.usuario.apellido" placeholder="Apellido(s)"/>
          </fieldset>
          </form>
      </article>
      <article>
        <usuario nombre="sesion.usuario.nombre" apellido="sesion.usuario.apellido"/>
      </article>
    </section>

    <script src="js/app.min.js" async></script>
  </body>
</html>
