Zepto(function($){

	// ----------------------------------------
	// ! duplicate
	// ----------------------------------------
	$(document).on('click', 'a[data-duplicate-target]', function(e){
		e.preventDefault();

		var id = $(this).data('duplicateTarget'),
			_root = $('[data-duplicate="'+id+'"]').last(),
			_template = _root.clone();

		_root.after(_template.val(''));
	})




	// ----------------------------------------
	// ! dropdown selection
	// ----------------------------------------
	
	$(document).on('click', '.selection [data-target]', function(e){
		var id = $(this).data('target');
		$('.selection-box#'+id).removeClass('hidden');
	})

	$(document).on('click', '.selection-box li', function(e){
		var _this = $(this),
			_root = $(this).closest('.selection-box'),
			v = _this.text(),
			id = _root.attr('id');
		$('.selection [data-target="'+id+'"] input').val(v);
		//_root.addClass('hidden');
	})

	$(document).on('click', '.selection-box', function(e){
		$(this).addClass('hidden');
	})

})