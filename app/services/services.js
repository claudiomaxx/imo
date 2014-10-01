(function () {
    'use strict';

    function getImoveis() {
    }

    function getImovel() {
    }

    function tipoImovelService() {
    }

    function finalidadeService() {
    }

    function bairroService() {
    }

    function listasService() {
        return {
            getListaTipoImovel : getListaTipoImovel,
            getListaFinalidade : getListaFinalidade,
            getListaBairro     : getListaBairro,
            getListaLancamento : getListaLancamento

        }
    }

    function imovelService() {
        return {
            getImovel : getImovel,
            getImoveis : getImoveis
        }
    }

    angular.module('servicesModule', [])
        .service('listasService', ['', listasService])
        .service('imovelService', ['', imovelService]);

}());
