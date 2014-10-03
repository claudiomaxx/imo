(function (window) {
    'use strict';

    function listasService($http) {

        function getListaTipoImovel($params) {
            return $http.get('/rest/tipo-imove', { params : $params });
        }

        function getListaBairros($params) {
            return $http.get('/rest/bairros', { params : $params });
        }

        function getFiltros($params) {
            return $http.get('/rest/filtros', { params : $params });
        }

        return {
            getListaTipoImovel  : getListaTipoImovel,
            getListaBairro      : getListaBairros,
            getFiltros          : getFiltros
        };
    }


    function imovelService($http) {

        function getImoveis($params) {
            return $http.get('/rest/imoveis', { params : $params });
        }

        function getImovel($params) {
            return $http.get('/rest/imovel', { params : $params });
        }

        return {
            getImovel : getImovel,
            getImoveis : getImoveis
        };
    }


    function paginaService($http) {

        function getQuemSomos($params) {
            return $http.get('/rest/paginas/quem-somos', { params : $params });
        }

        return {
            getQuemSomos : getQuemSomos
        };
    }

    window.angular.module('servicesModule', [])
        .factory('listasService', ['$http', listasService])
        .factory('imovelService', ['$http', imovelService])
        .factory('paginaService', ['$http', paginaService]);

}(window));
