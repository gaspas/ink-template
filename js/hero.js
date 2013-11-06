window.onload = function() {
	
						
												
		var homeSlider = new Swiper('#hero-slider',{
			mode:'horizontal',
			simulateTouch : false
		});
		
		//Nav swiper triggers
		Ink.Dom.Event.observe( Ink.i('arrow3-left'), 'click', function( e ){
			Ink.Dom.Event.stop(e);
			homeSlider.swipePrev()
		});
		
		Ink.Dom.Event.observe( Ink.i('arrow3-right'), 'click', function( e ){
			Ink.Dom.Event.stop(e);
			homeSlider.swipeNext();
		});	
	

	
		
		var plEL = Ink.i('hero-slider');
		var ulEl = Ink.Dom.Element_1.create('ul', {
				class: 	'tabs-nav',
				id: 	'tabs-nav'
		});
		var articles = Ink.Dom.Selector_1.select('article', plEL);
		
		Ink.Util.Array_1.forEach( articles, function(element){
			var liEl = Ink.Dom.Element_1.create('li', {
				class: 	'tab_item'
			});
			var aEl = Ink.Dom.Element_1.create('a', {
				href: 	'#'+element.id
			});							
			var html = element.getElementsByTagName("a");
			
			aEl.innerHTML = html[0].innerHTML;
			liEl.insertBefore(aEl);
			ulEl.insertBefore(liEl);
		});

		plEL.insertBefore(ulEl, plEL.firstChild);					
		
		setTimeout(function(){

			Ink.requireModules( ['Ink.UI.Tabs_1'], function(Tabs){
				var tabsObj = new Tabs('#hero-slider',{
					onChange: function(tab){
					}
				});							
			});
		
		},500)
	
}

// Detect whether device supports orientationchange event, otherwise fall back to
// the resize event.
var supportsOrientationChange = "onorientationchange" in window,
	orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
var plEL = Ink.i('hero-slider');

function checkSlider(){
	if( Modernizr.mq('only all and (max-width: 649px)') && Ink.i('hero-slider') ) {
		
		if( Ink.Dom.Css_1.hasClassName(plEL,'tabs-event')) {
			Ink.Dom.Css_1.removeClassName (plEL,'tabs-event')
		} else if( !Ink.Dom.Css_1.hasClassName(plEL,'slider-event') ) {
			Ink.Dom.Css_1.addClassName (plEL, 'slider-event' );
		}
		
		
	} else if ( Ink.i('hero-slider') ){
		if( Ink.Dom.Css_1.hasClassName(plEL,'slider-event')) {
			Ink.Dom.Css_1.removeClassName (plEL,'slider-event')
		}
		Ink.Dom.Css_1.addClassName (plEL, 'tabs-event' );					
	}				
}

checkSlider()

window.addEventListener(orientationEvent, function() {
	checkSlider()
}, false);	