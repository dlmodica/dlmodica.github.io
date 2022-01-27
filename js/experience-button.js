$('#btn-1,#btn-2,#btn-3').click(function(){
    var btn = $(this).data("showbutton");
    showButtonText(btn);
});

function showButtonText(btn) {    
    // reset
	$('.text').hide();    	
    $('[data-button]').hide(); 
    $('[data-showbutton]').removeClass('clicked');
        
    // only show the selected
    $('[data-showbutton=' + btn + ']').addClass('clicked');  
    $('[data-button=' + btn + ']').show();
}