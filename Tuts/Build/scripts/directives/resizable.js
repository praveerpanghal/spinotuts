define(["directives/directives"],function(i){i.directive("resizable",["$rootScope",function(i){return{restrict:"A",link:function(i,e,t){e.resizable({maxHeight:200,minHeight:100,stop:function(e,t){i.$apply(function(){i.updateScale(i.imageitem.name,{top:t.position.top,left:t.position.left},{width:t.size.width,height:t.size.height})})}})}}}])});