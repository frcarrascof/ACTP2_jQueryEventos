$(document).ready(function(){
	//Aqui va a ejecutarse el código una vez que el documento esté "ready"
	$('.card').click(function(){
		//Aqui agregamos la función que quita o agrega la clase "card--open"
		$(this).toggleClass("card--open");
	});

	$('.card__like').click(function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		
		$(this).toggleClass('card__like--red');
	})

	$('.card__follow-btn').click(function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		$(this).toggleClass('card__follow-btn--following');

		if ($(this).text() === 'Seguir') {
			$(this).text('Siguiendo');	
		}else{
			$(this).text('Seguir');
		}
	})

	$('#image').change(function(evt){
		var image = 'assets/images/squared/'+$(this).val();
		$('.create__image .create__img').attr('src',image);
	})

	$('#author').change(function(evt){
		var image = 'assets/images/profiles/'+$(this).val();
		$('.create__profile .create__img').attr('src',image);
	})

	$('.create__form').submit(function(evt){
		evt.preventDefault(); //Se previene que se envie el formulario

		var title 		= $('#title').val();
		var followers 	= $('#followers').val();
		var likes 		= $('#likes').val();
		var following 	= $('#following').val();
		var image 		= $('#image').val();
		var author 		= $('#author').val();

		var card = `
		<li class="card">
	      <div class="card__highlight">
	        <img class="card__img" src="./assets/images/squared/${ image }" alt="">
	      </div>
	      <div class="card__content">
	        <div class="card__profile-container">
	          <img class="card__profile" src="./assets/images/profiles/he.jpg" alt="">
	        </div>
	        <div class="card__title">
	          <h2>${ title }</h2>
	        </div>
	        <div class="card__author">
	          <h3 class="card__author-name">${ author }</h3>
	        </div>
	        <a class="card__like" href="#">
	          <i class="fas fa-heart"></i>
	        </a>
	        <div class="card__hidden">
	          <ul class="social">
	            <li class="social__element">
	              <div class="social__number">${ following }</div>
	              <div class="social__text">Following</div>
	            </li>
	            <li class="social__element">
	              <div class="social__number">${ likes }</div>
	              <div class="social__text">Likes</div>
	            </li>
	            <li class="social__element">
	              <div class="social__number">${ followers }</div>
	              <div class="social__text">Followers</div>
	            </li>
	          </ul>
	          <div class="card__follow">
	            <button class="card__follow-btn">Seguir</button>
	          </div>
	        </div>
	      </div>
	    </li>`;

	    //.html reemplaza todo el html existente
	    $('.cards').prepend(card);

	    $('html').animate({
	    	'scrollTop' : 300
	    },1000);

	    $(this).get(0).reset();
	    $('.create__image .create__img').attr
	});

});