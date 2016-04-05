
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    })
    .state('app.barcelona', {
      url: '/barcelona',
      views: {
        'menuContent': {
          templateUrl: 'templates/barcelona.html',
          controller: 'BarcelonaCtrl'
        }
      }
    })
    .state('app.fecuador', {
      url: '/fecuador',
      views: {
        'menuContent': {
          templateUrl: 'templates/fecuador.html',
          controller: 'FEcuadorCtrl'
        }
      }
    })
    .state('app.latri', {
      url: '/latri',
      views: {
        'menuContent': {
          templateUrl: 'templates/latri.html',
          controller: 'LaTriCtrl'
        }
      }
    })
    .state('app.seriea', {
      url: '/seriea',
      views: {
        'menuContent': {
          templateUrl: 'templates/seriea.html',
          controller: 'SerieACtrl'
        }
      }
    })
    .state('app.internacionales', {
      url: '/internacionales',
      views: {
        'menuContent': {
          templateUrl: 'templates/internacionales.html',
          controller: 'InternacionalesCtrl'
        }
      }
    })
    .state('app.formativas', {
      url: '/formativas',
      views: {
        'menuContent': {
          templateUrl: 'templates/formativas.html',
          controller: 'FromativasCtrl'
        }
      }
    })
    .state('app.embajadores', {
      url: '/embajadores',
      views: {
        'menuContent': {
          templateUrl: 'templates/embajadores.html',
          controller: 'EmbajadoresCtrl'
        }
      }
    })
    .state('app.chicas', {
      url: '/chicas',
      views: {
        'menuContent': {
          templateUrl: 'templates/chicas.html',
          controller: 'ChicasCtrl'
        }
      }
    })
    .state('app.opinion', {
      url: '/opinion',
      views: {
        'menuContent': {
          templateUrl: 'templates/opinion.html',
          controller: 'OpinionCtrl'
        }
      }
    })
    .state('app.registro', {
      url: '/registro',
      views: {
        'menuContent': {
          templateUrl: 'templates/registro.html',
          controller: 'RegistroCtrl'
        }
      }
    })
    .state('app.invitaramigos', {
      url: '/invitaramigos',
      views: {
        'menuContent': {
          templateUrl: 'templates/invitaramigos.html',
          controller: 'InvitarAmigosCtrl'
        }
      }
    })
    .state('app.posiciones', {
      url: '/posiciones',
      views: {
        'menuContent': {
          templateUrl: 'templates/posiciones.html',
          controller: 'PosicionesCtrl'
        }
      }
    })
    .state('app.resultados', {
      url: '/resultados',
      views: {
        'menuContent': {
          templateUrl: 'templates/resultados.html',
          controller: 'ResultadosCtrl'
        }
      }
    })
    .state('app.calendario', {
      url: '/calendario',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendario.html',
          controller: 'CalendarioCtrl'
        }
      }
    })
    .state('app.partidos', {
      url: '/partidos',
      views: {
        'menuContent': {
          templateUrl: 'templates/partidos.html',
          controller: 'PartidosCtrl'
        }
      }
    })
    .state('app.goleadores', {
      url: '/goleadores',
      views: {
        'menuContent': {
          templateUrl: 'templates/goleadores.html',
          controller: 'GoleadoresCtrl'
        }
      }
    })
    .state('app.canaltv', {
      url: '/canaltv',
      views: {
        'menuContent': {
          templateUrl: 'templates/canaltv.html',
          controller: 'CanaltvCtrl'
        }
      }
    })
    .state('app.planetascore', {
      url: '/planetascore',
      views: {
        'menuContent': {
          templateUrl: 'templates/planetascore.html',
          controller: 'PlanetascoreCtrl'
        }
      }
    })
  .state('app.singlebarcelona', {
    url: '/barcelona/:barcelonaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/barcelonanoticia.html',
        controller: 'BarcelonaNoticiaCtrl'
      }
    }
  })
  .state('app.single', {
    url: '/noticias/:noticiaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/noticia.html',
        controller: 'NoticiaCtrl'
      }
    }
  })
  .state('app.singleformativa', {
    url: '/formativas/:formativaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/formativa.html',
        controller: 'FormativaCtrl'
      }
    }
  })
  .state('app.singlefecuador', {
    url: '/fecuador/:fecuadorId',
    views: {
      'menuContent': {
        templateUrl: 'templates/fecuadornoticia.html',
        controller: 'FEcuadorNoticiaCtrl'
      }
    }
  })
  .state('app.singlelatri', {
    url: '/latri/:latriId',
    views: {
      'menuContent': {
        templateUrl: 'templates/latrinoticia.html',
        controller: 'LaTriNoticiaCtrl'
      }
    }
  })
  .state('app.singleseriea', {
    url: '/seriea/:serieaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/serieanoticia.html',
        controller: 'SerieANoticiaCtrl'
      }
    }
  })
  .state('app.singlechica', {
    url: '/chicas/:chicaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/chica.html',
        controller: 'ChicasNoticiaCtrl'
      }
    }
  })
  .state('app.singleinternacionales', {
    url: '/internacionales/:internacionalId',
    views: {
      'menuContent': {
        templateUrl: 'templates/internacionalesnoticias.html',
        controller: 'InternacionalesNoticiaCtrl'
      }
    }
  })
  .state('app.singleembajadores', {
    url: '/embajadores/:embajadoresId',
    views: {
      'menuContent': {
        templateUrl: 'templates/embajadoresnoticias.html',
        controller: 'EmbajadoresNoticiasCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/noticias');
});

function loading(value){
  if(value){
    $('#loading').css("display","inline");
  }else $('#loading').css("display","none");
}