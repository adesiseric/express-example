(function () {

    'use strict';

    function MainCtrl ( $scope, $http ) {

        function setup () {
            console.log('MainCtrl');
        }

        function handleError () {
            alert('Error: page not found.');
        }

        $scope.obtenerAuto = function () {
            $http.get('/api')
            .success(function ( data ) {
                if ( data ) {
                    $scope.model = data;
                }
            })
            .error(handleError);
        };

        $scope.test = function () {
            $http.get('/api/test')
            .success(function (data) {
                var newLine = '\r\n';

                if (data) {
                    alert(data.title + newLine + data.msg);
                }
            })
            .error(handleError);
        };

        setup();

    }

    MainCtrl.$inject = ['$scope', '$http'];

    angular.module( 'expressApp' )
    .controller( 'MainCtrl', MainCtrl );

})();