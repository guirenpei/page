angular.module('page.directive',[])

.directive("ezClock",function(){//在模块上注册指令ezClock的类工厂
	return {
		restrict : "E",
		replace : true,
		template : "<div class='clock'></div>",
		link : function(scope,element,attrs){
			setInterval(function(){
				//获取当前时间
				var d = new Date();

				//element对应引用该指令的DOM对象的jqLite封装
				element.text(d.toString());
			},1000);
		}
	}
})
.directive('draggable',function ($document) {
	 var startX=0, startY=0, x = 0, y = 0;
    return function(scope, element, attr) {
      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });
      element.bind('mousedown', function(event) {
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.bind('mousemove', mousemove);
        $document.bind('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    }
})
.directive('infor', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, element, iAttrs, controller) {
        element.bind('mouseover',function(){
          element.addClass('infor-active');
        })
        .bind('mouseout',function(){
          element.removeClass('infor-active');
        })
    }
  };
})