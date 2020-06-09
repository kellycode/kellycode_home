
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
                angular.element('#chatButton').on('click', function () {
                    angular.element('#contact_cancel').triggerHandler('click');
                });

                $scope.formData = {
                    content: '',
                    sendername: '',
                    avatar_url: ''
                };

                $scope.cancel = function () {
                    $scope.toggleCommentVis();
                };

                $scope.processForm = function () {
                    $scope.contactStatus = 'sending';
                    console.log(JSON.stringify($scope.formData));

                    $http({
                        method: 'POST',
                        url: 'https://discordapp.com/api/webhooks/573198567167229972/7s_6voMG536e58wlFjGkqVKFlFMM1dtp8zDZxzp56j3boaWr8Z_FCPf3CztTnaq5_YPt',
                        data: JSON.stringify($scope.formData),
                        headers: {'Content-Type': 'application/json'}  // set the headers so angular passing info as form data (not request payload)
                    }).then(function (response) {
                        // success
                        console.log('Messege successfully sent');
                        
                        // erase text in the form to discourage malicious sends
                        $scope.formData.content = '';
                        $scope.formData.sendername = '';
                        $scope.serverResponse = response.xhrStatus;
                        $scope.contactStatus = 'Success';

                        // send the contact form away
                        $scope.toggleCommentVis();
                        
                        // display a notification, wait a bit wait and remove it
                        $('#contactNotify').addClass('all_good').html('Success! &#128522;');
                        $timeout(function () {
                            $('#contactNotify').removeClass('all_good').html('');
                        }, 3500);
                        
                    }, function (response) {
                        // no success
                        console.log('Messege not successfully sent');
                        
                        // log the response info
                        // erase text in the form to discourage malicious sends
                        $scope.formData.content = '';
                        $scope.formData.sendername = '';
                        $scope.serverResponse = response.xhrStatus;
                        $scope.contactStatus = 'Failure';

                        // hide the form
                        $scope.toggleCommentVis();
                        
                        // display a notification, wait a bit wait a bit and remove it
                        $('#contactNotify').addClass('not_good').html('Something went wrong! &#128533;');
                        $timeout(function () {
                            $('#contactNotify').removeClass('not_good').html('');
                            ;
                        }, 3500);

                        // erase text in the form to discourage malicious repeat sends
                        $scope.formData.content = '';
                    });
                    
                    
                    
                    
                };
            }]);
