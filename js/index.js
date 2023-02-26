$(document).ready(function(){
    
    //window scroll...
  //  $(window).scroll(function() {    
 //   if (this.scrollY > 20) 
//     {
//         $(".navbar").addClass("active");
    
//     }
//     else
//     {
//         $(".navbar").removeClass("active");
        
//     }
// });
    //toggle click....
    $('.toggle').click(function(){
			$('.toggle').toggleClass('active');
			$('.back').toggleClass('active');
			
			$('.list').slideToggle(300);
			
		});
		
		
		
		
		
		
	//ajax...
	
		$.ajax({
	    method : 'GET',
	    url:'https://gogoanime.consumet.org/popular',
	    dataType:'json',
	    success : function(data){
	        console.log(data);
	        $('.title').html('<li>Anime Title :'+data[0].animeTitle+'</li>');
	        $('.release').html('<li>Released in :'+data[0].releasedDate+'</li>');
	        $('.img_1').append('<img src=' + data[0].animeImg + '/>');
	        
	            
	        
	    }
	});
	
	
	
	
	
	
	
	
	
	
	
    $('.dark-light').click(function(){
			$('body').toggleClass('active');
			$('.navbar').toggleClass('active');
			$('.navbar .logo_1').toggleClass('active');
			$('.navbar .log_2').toggleClass('active');
			$('.navbar .cont .toggle span').toggleClass('active');
			$('.curved').toggleClass('active');
			$('.curved svg path').toggleClass('active');
			$('.dark-light').toggleClass('active');
			$('.container').toggleClass('active');
			$('.connect .container_con .box button').toggleClass('active');
			$('.container_con').toggleClass('active');
			$('.connect .container .box').toggleClass('active');
			$('.end').toggleClass('active');
			$('p').toggleClass('active');
			
			
		});
		
	
        $('.container').slice(0, 3).show();
    $('.btn').click(function(){
		
        $('.container:hidden').slice(0, 3).show(0.5);
		
	    if( $('.container:hidden').length ===0 ){
	         $('.btn').fadeOut(0.5);
	    }
		});
		
		
		
				//type writter code
		$(".typewritter").typewriter({
        prefix : "",
        text : ['I hope to be a member of the team work in a successful and competitive global company to develop my skills, to be professional, creative, and to improve income. '],
        typeDelay : 100,
        waitingTime : 1500,
        blinkSpeed : 800
    });
});

