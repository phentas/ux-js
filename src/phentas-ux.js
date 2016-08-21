var PhentasUx = function(){
        
        /* DomFlicker 0.1 
         */
        
        var DomFlicker_Std_config = {
            
            selector: '*[pux-dom-flicker]',    // all elements with 'phnts-flix' attribute
            duration: 250,                // plays animation for 250ms 
            count:    7,                  // turns 3 times elements on/off
            onFlickerInEnd: function(){   // hide elements after 5 seconds  
                var that = this;
                setTimeout(function(){
                    that.flicker_out();
                },5000);
            }, 
             onFlickerOutEnd: function(){
                var that = this;
                window.setTimeout(function(){
                    that.flicker_in();
                },5000);  
            }
        };
        var DomFlicker = function( _config){
            
            var timer_id = e = e_id = i = 0;
            
            this.flicker_in = function() {
    
                var that = this; // this scope extension

                timer_id = setInterval ( function(){

                    if(i>=config.count){
                        e[e_id].style.visibility = "visible";
                        i = 0;

                        if(e_id+1>=e.length) {
                            e_id,i = 0;
                            window.clearInterval(timer_id);
                            that.onFlickerInEnd();
                        }else{
                            e_id++;       
                        }   
                    }else{
                        i++;
                         e[e_id].style.visibility = e[e_id].style.visibility == "hidden" ? "visible" : "hidden" ;
                    }
                },config.period);
            };

            /*  flicker_out()
                starts animationen to hide elements backward.
             */
            this.flicker_out = function() {

                var that = this;
                e_id = e.length-1;

                timer_id = setInterval ( function(){

                    if(i>=config.count){
                        e[e_id].style.visibility = "hidden" ;
                        i = 0;

                        if(e_id<=0) {
                            window.clearInterval(timer_id);
                            that.onFlickerOutEnd();
                        }else{
                            e_id--;
                        }   
                    }else{
                        i++;
                        e[e_id].style.visibility = e[e_id].style.visibility == "hidden" ? "visible" : "hidden" ;     
                    }
                },config.period);
            };

            this.reconfigure = function( _config ){

                timer_id = e = e_id = i = 0;
                config = typeof _config == "undefined" ? DomFlicker_Std_config : _config;
                config.period = Math.round(config.duration/config.count);
                preconfigure_css();
                e = document.querySelectorAll(config.selector);
                e.length<=0?error('DomFlicker: selector:"'+config.selector+'" has no elements.',null):null;
                this.onFlickerInEnd  = typeof config.onFlickerInEnd == "undefined" ? function(){} : config.onFlickerInEnd;
                this.onFlickerOutEnd = typeof config.onFlickerOutEnd == "undefined" ? function(){} : config.onFlickerOutEnd;
            };

            this.update_config = function( _config) {

                for( v in _config ) {

                    config[v] = typeof config[v] != "undefined" ? _config[v] : error('DomFlicker: "'+v+'" is not a parameter of configuration.',config[v]);
                }

                return config;
            }

            var preconfigure_css = function() {

                var dcs = document.styleSheets[document.styleSheets.length-1];
                dcs.insertRule(config.selector+" { visibility:hidden; }",dcs.rules.length);
            }

            var error = function (m,o){
                console.error(m);
                return o;
            }
            this.reconfigure( _config );
        };
        
        
        
        /* SmartCounter 0.1 
         */
        
        var SmartCounter_Std_config = {};
        this.SmartCounter = function( _config){
            
            
        };
    
    return {
        
        DomFlicker:DomFlicker
    };
};