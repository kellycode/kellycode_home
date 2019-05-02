
angular.module('contactApp', [])
        .controller('ContactController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
                $scope.contactStatus = 'idle';
                $scope.serverResponse = '';
                $scope.isVisible = false;

                // contact form visibility toggle
                $scope.toggleCommentVis = function () {
                    $scope.isVisible = !$scope.isVisible;
                }

                // the contact button is external to the angular scope here so
                // get a handle to it and add a click listener method
                angular.element('#contact_button').on('click', function () {
                    angular.element('#contact_cancel').triggerHandler('click');
                });

                $scope.formData = {
                    content: ''
                };

                $scope.cancel = function () {
                    $scope.toggleCommentVis();
                };

                $scope.processForm = function () {
                    $scope.contactStatus = 'sending';

                    $http({
                        method: 'POST',
                        url: 'https://discordapp.com/api/webhooks/573198567167229972/7s_6voMG536e58wlFjGkqVKFlFMM1dtp8zDZxzp56j3boaWr8Z_FCPf3CztTnaq5_YPt',
                        data: $scope.formData,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
                    }).then(function (response) {
                        // success
                        console.log('Messege successfully sent');
                        
                        // erase text in the form
                        $scope.formData.content = '';
                        $scope.serverResponse = response.xhrStatus;
                        $scope.contactStatus = 'Success';
                        
                        // use the Contact button to present success validation
                        $('#contact_button').addClass('disabled').removeClass('btn-outline-secondary').html('&#128076;'); // OK symbol
                        //
                        // send the contact form away
                        $scope.toggleCommentVis();
                        
                        // wait a bit and reset the Contact button
                        $timeout(function () {
                            $('#contact_button').addClass('btn-outline-secondary').removeClass('disabled').html('&#9993;'); // Mail symbol
                            ;
                        }, 5000);
                        
                    }, function (response) {
                        // no success
                        console.log('Messege not successfully sent');
                        
                        // log the response info
                        $scope.serverResponse = response.xhrStatus;
                        $scope.contactStatus = 'Failure';

                        // display failed send with a sad face
                        $('#contact_button').addClass('disabled').removeClass('btn-outline-secondary').html('&#9785;'); // sad face symbol
                        // hide the form
                        $scope.toggleCommentVis();
                        // wait a bit and reset the Contact button
                        $timeout(function () {
                            $('#contact_button').addClass('btn-outline-secondary').removeClass('disabled').html('&#9993;'); // Mail symbol
                        }, 5000);
                        
                        // erase text in the form to discourage malicious repeat sends
                        $scope.formData.content = '';
                    });
                };
            }]);
