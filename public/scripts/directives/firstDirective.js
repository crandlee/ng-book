angular.module('myApp', []).directive('firstDirective', function () {
    console.log('loading first-directive');
    return {
        restrict: 'E',
        replace: true,
        template: ' <div> \
                    <label>My Url Field:</label> \
                    <input type="text" ng-model="myUrl" /> \
                    <a href="{{myUrl}}">{{myLinkText}}</a> \
                    </div>',
        scope: {
            myUrl: '=someAttr',
            myLinkText: '@'
        }
    };
});