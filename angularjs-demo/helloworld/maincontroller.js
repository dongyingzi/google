app.controller('MainController', function ($scope){
    $scope.selectedPerson = 0;
    $scope.selectedGenre = null;
    $scope.people = [
        {
            id: 0,
            name: 'leon',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ]
        },
        {
            id: 1,
            name: 'Chris',
            music: [
                'Indie',
                'drumstep',
                'dubstep',
                'electro'
            ]
        },
        {
            id: 2,
            name: 'Harry',
            music: [
                'rock',
                'Metal',
                'hello',
                'abc'
            ]
        }
    ];
});
