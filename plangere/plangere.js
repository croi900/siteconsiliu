var post_plangere = function(){
    var data = new FormData();
    data.append("data" , document.getElementsByClassName("plangere_textbox")[0].value);
    
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhr.open( 'post', '/plangere/plangere.php', true );
    xhr.send(data);
}