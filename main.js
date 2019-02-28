// Please complete the below exercises preferably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked

$(document.body).on('click', '.title' ,function(){
    $(this).nextAll('.description').slideToggle('slow');
});

// 2. Remove each item when we click on the closing X

$(document.body).on('click', '.close' ,function(){
    $(this).parent().remove();
});

// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

$('button').click(function(){
    var itemNum = $('.item').length + 1;
    var val = $('#newtitle').val();
    var html = '';
    if( val == '' ){
        val = "Title " + itemNum;
    }
    html += '<div class="item"><h1 class="title">'+val+'</h1><span class="close">x</span><p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>';

    $('.item-list').append(html);

});

//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page







