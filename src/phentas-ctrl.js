var PhentasCtrl = {
    
    /* Dom Ready Controller 0.1 */
    DomReadyController: function( _f, _s) {

        var f  = function(){
            _f();
            clearInterval(int);
        };

        var domready = function(){
            return document.querySelectorAll(_s).length>0?"complete":"loading";
        };

        var int  = setInterval(function(){
            var readyState = typeof _s == "undefined" ? document.readyState:domready();
            readyState=="complete"?f():null;

        },100);
    }
};
    
