angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  //ng-click="registro()"
  $ionicModal.fromTemplateUrl('templates/registro.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeRegistro = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.registro = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NoticiasCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/todosPostMovil.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('noticias-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('noticias-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/noticias/'+id);
        localStorage.setItem('idnoticia-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('BarcelonaCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/barcelonaPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('barcelona-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('barcelona-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/barcelona/'+id);
        localStorage.setItem('idbarcelona-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('FEcuadorCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/futbolEcuatorianoPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('fecuador-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('fecuador-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/fecuador/'+id);
        localStorage.setItem('idfecuador-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('InternacionalesCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/internacionalesPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('internacionales-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('internacionales-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/internacionales/'+id);
        localStorage.setItem('idinternacionales-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('LaTriCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/laTriPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('latri-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('latri-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/latri/'+id);
        localStorage.setItem('idlatri-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('SerieACtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/serieAPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('seriea-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('seriea-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/seriea/'+id);
        localStorage.setItem('idseriea-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('FromativasCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/formativasPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('formativas-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('formativas-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/formativas/'+id);
        localStorage.setItem('idformativa-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('EmbajadoresCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/embajadoresEcuatorianosPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('embajadores-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('embajadores-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/embajadores/'+id);
        localStorage.setItem('idembajadores-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('ChicasCtrl', function($scope, $location, $http) {
loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/chicas_calientesPost.json').success(function(data) {
        
        var noticias = [];
        for (var i = 0; i < data.length; i++) {
          var noticia = {
            'id': i + 1,
            'titulo': data[i][0],
            'img': data[i][1],
            'autor': data[i][2],
            'fecha': data[i][3],
            'url': data[i][4],
            'contenido': data[i][5]
          };
          
          noticias.push(noticia);
        };
        $scope.data_noticias = noticias;

        loading(false);

        localStorage.setItem('chicas-planetamarillo', JSON.stringify(noticias));
    });

  $scope.noticiaClic = function(id){

    var noticias = JSON.parse(localStorage.getItem('chicas-planetamarillo'));

    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id){
        $location.path('app/chicas/'+id);
        localStorage.setItem('idchicas-planetamarillo', id);
        break;
      }
    };
  }
})
.controller('OpinionCtrl', function($scope, $stateParams) {
})
.controller('RegistroCtrl', function($scope, $stateParams) {
})
.controller('CanaltvCtrl', function($scope, $stateParams) {
})
.controller('PlanetascoreCtrl', function($scope, $stateParams) {
})
.controller('ResultadosCtrl', function($scope, $stateParams, $http) {
  $http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/partidos_resultados.json').success(function(data) {
        
        var partidos = [];
        var img_vicitante;
        var img_local;
        for (var i = 0; i < data.length; i++) {

            if (data[i][0]=="barcelona") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Bsc.png"}
            else if (data[i][0]=="nacional") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/nacional.png"}
            else if (data[i][0]=="liga") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/liga.png"}
            else if (data[i][0]=="emelec") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/emelec.png"}
            else if (data[i][0]=="fuerzaamarilla") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/FuerzaAmarilla.png"}
            else if (data[i][0]=="cuenca") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Cuenca.png"}
            else if (data[i][0]=="river") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/river.png"}
            else if (data[i][0]=="catolica") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/catolica.png"}
            else if (data[i][0]=="independiente") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Independ.png"}
            else if (data[i][0]=="mushuc") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/mushuc.png"}
            else if (data[i][0]=="delfin") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Delfin SC.png"}
            else if (data[i][0]=="aucas") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/sdaucas.png"}


            if (data[i][3]=="barcelona") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Bsc.png"}
            else if (data[i][3]=="nacional") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/nacional.png"}
            else if (data[i][3]=="liga") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/liga.png"}
            else if (data[i][3]=="emelec") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/emelec.png"}
            else if (data[i][3]=="fuerzaamarilla") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/FuerzaAmarilla.png"}
            else if (data[i][3]=="cuenca") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Cuenca.png"}
            else if (data[i][3]=="river") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/river.png"}
            else if (data[i][3]=="catolica") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/catolica.png"}
            else if (data[i][3]=="independiente") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Independ.png"}
            else if (data[i][3]=="mushuc") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/mushuc.png"}
            else if (data[i][3]=="delfin") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Delfin SC.png"}
            else if (data[i][3]=="aucas") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/sdaucas.png"}
          
          var partido = {
            'id': i + 1,
            'equipo_local': data[i][0],
            'fecha_partido': data[i][4],
            'goles_local': data[i][1],
            'goles_vicitante': data[i][2],
            'equipo_vicitante': data[i][3],
            'dia_partido': data[i][6],
            'img_local':img_local,
            'img_vicitante':img_vicitante
          };
          partidos.push(partido);
        };
        $scope.data_partidos = partidos;
        //loading(false);
    });
})
.controller('GoleadoresCtrl', function($scope, $stateParams, $http) {
  $http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/goleadores.json').success(function(data) {
      var goleadores = [];

      for (var i = 0; i < data.length; i++) {
        
        var goleador = {
            'id': i + 1,
            'nombre': data[i][0],
            'equipo': data[i][1],
            'goles': data[i][2]
          };
          goleadores.push(goleador);
      };
      $scope.data_goleadores = goleadores;
  });
})
.controller('PartidosCtrl', function($scope, $stateParams, $http) {
  $http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/partidos_resultados.json').success(function(data) {
        
        var partidos = [];
        var img_vicitante;
        var img_local;
        for (var i = 0; i < data.length; i++) {

            if (data[i][0]=="barcelona") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Bsc.png"}
            else if (data[i][0]=="nacional") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/nacional.png"}
            else if (data[i][0]=="liga") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/liga.png"}
            else if (data[i][0]=="emelec") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/emelec.png"}
            else if (data[i][0]=="fuerzaamarilla") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/FuerzaAmarilla.png"}
            else if (data[i][0]=="cuenca") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Cuenca.png"}
            else if (data[i][0]=="river") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/river.png"}
            else if (data[i][0]=="catolica") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/catolica.png"}
            else if (data[i][0]=="independiente") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Independ.png"}
            else if (data[i][0]=="mushuc") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/mushuc.png"}
            else if (data[i][0]=="delfin") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Delfin SC.png"}
            else if (data[i][0]=="aucas") {img_local="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/sdaucas.png"}


            if (data[i][3]=="barcelona") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Bsc.png"}
            else if (data[i][3]=="nacional") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/nacional.png"}
            else if (data[i][3]=="liga") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/liga.png"}
            else if (data[i][3]=="emelec") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/emelec.png"}
            else if (data[i][3]=="fuerzaamarilla") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/FuerzaAmarilla.png"}
            else if (data[i][3]=="cuenca") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Cuenca.png"}
            else if (data[i][3]=="river") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/river.png"}
            else if (data[i][3]=="catolica") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/catolica.png"}
            else if (data[i][3]=="independiente") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Independ.png"}
            else if (data[i][3]=="mushuc") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/mushuc.png"}
            else if (data[i][3]=="delfin") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/Delfin SC.png"}
            else if (data[i][3]=="aucas") {img_vicitante="http://planetamarillo.com/wp-content/themes/planet_pc_movil/images/sdaucas.png"}
          
          var partido = {
            'id': i + 1,
            'equipo_local': data[i][0],
            'fecha_partido': data[i][4],
            'goles_local': data[i][1],
            'goles_vicitante': data[i][2],
            'equipo_vicitante': data[i][3],
            'dia_partido': data[i][6],
            'img_local':img_local,
            'img_vicitante':img_vicitante
          };
          partidos.push(partido);
        };
        $scope.data_partidos = partidos;
        //loading(false);
    });
})
.controller('PosicionesCtrl', function($scope, $stateParams, $http) {
  loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/tablaPosiciones.json').success(function(data) {
        
        var posiciones = [];
        var imagen;
        for (var i = 0; i < data.length; i++) {

          if (data[i][4] == 1) {
            imagen="img/flecha_arriba.png";
          }else if (data[i][4] == 0) {
            imagen="img/igual.png";
          }else if (data[i][4] == -1) {
            imagen="img/flecha_abajo.png";
          };
          var posicion = {
            'id': i + 1,
            'equipo': data[i][0],
            'Pj': data[i][1],
            'Pts': data[i][2],
            'Gd': data[i][3],
            'img': imagen
          };
          
          posiciones.push(posicion);
        };
        $scope.etapa = data[0][5];
        $scope.fecha = data[0][6];
        $scope.data_posicion = posiciones;
loading(false);
        localStorage.setItem('posiciones-planetamarillo', JSON.stringify(posiciones));
    });
})
.controller('CalendarioCtrl', function($scope, $stateParams, $http) {
  loading(true);
$http.get('http://planetamarillo.com/wp-content/themes/planet_pc_movil/json/calendario.json').success(function(data) {
        
        var calendario = [];
        var imagen;
        for (var i = 0; i < data.length; i++) {

          var cale = {
            'id': i + 1,
            'jornada': data[i][0],
            'fecha': data[i][1],
            'equipo_local': data[i][2],
            'img_local': data[i][3],
            'goles_local': data[i][4],
            'goles_vicitante': data[i][5],
            'img_vicitante': data[i][6],
            'equipo_vicitante': data[i][7]

          };
          
          calendario.push(cale);
        };
        $scope.data_calendario = calendario;
loading(false);
        localStorage.setItem('calendario-planetamarillo', JSON.stringify(calendario));
    });
})
.controller('BarcelonaNoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('barcelona-planetamarillo'));
var id = localStorage.getItem('idbarcelona-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('FEcuadorNoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('fecuador-planetamarillo'));
var id = localStorage.getItem('idfecuador-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('LaTriNoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('latri-planetamarillo'));
var id = localStorage.getItem('idlatri-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('SerieANoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('seriea-planetamarillo'));
var id = localStorage.getItem('idseriea-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('InternacionalesNoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('internacionales-planetamarillo'));
var id = localStorage.getItem('idinternacionales-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('FormativaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('formativas-planetamarillo'));
var id = localStorage.getItem('idformativa-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('EmbajadoresNoticiasCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('embajadores-planetamarillo'));
var id = localStorage.getItem('idembajadores-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('ChicasNoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('chicas-planetamarillo'));
var id = localStorage.getItem('idchicas-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    break;
  } 
};

})
.controller('NoticiaCtrl', function($scope, $stateParams) {

var noticias = JSON.parse(localStorage.getItem('noticias-planetamarillo'));
var id = localStorage.getItem('idnoticia-planetamarillo');

for (var i = 0; i < noticias.length; i++) {
  if (noticias[i].id == id){
    $scope.titulo=noticias[i].titulo;
    $scope.fecha = noticias[i].fecha;
    $scope.img = noticias[i].img;
    $scope.contenido = noticias[i].contenido;
    $scope.autor = noticias[i].autor;
    $scope.url = noticias[i].url;
    break;
  } 
};

$scope.shareNative = function() {
        if (window.plugins && window.plugins.socialsharing) {

          window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, $scope.url,
                function() {
                    console.log("Success")
                },
                function (error) {
                    console.log("Share fail " + error)
                });
        }
        else console.log("Share plugin not available");
}
});
