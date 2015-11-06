(function () {

    'use strict';

    function MainCtrl ( $scope, $http ) {

        function setup () {
            console.log('MainCtrl');
        }

        $scope.obtenerAuto = function () {
            $http.get('/api')
            .success(function ( data ) {
                if ( data ) {
                    $scope.model = data;
                }
            })
            .error(function ( data ) {
                alert('Error: page not found.');
            });
        };

        setup();

    }

    MainCtrl.$inject = ['$scope', '$http'];

    angular.module( 'expressApp' )
    .controller( 'MainCtrl', MainCtrl );

})();