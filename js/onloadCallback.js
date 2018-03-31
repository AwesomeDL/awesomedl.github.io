window.onload=function(){
var onloadCallback = function() {
  grecaptcha.render('html_element', {
    'sitekey': '6LeQ6jsUAAAAALnIT4iWR720LjeveUviLLoGmHZe'
  });
};
onloadCallback();

$('form').on('submit', function(e) {
  if (grecaptcha.getResponse() == "") {
    e.preventDefault();
    alert("You can't proceed!");
  } else {
  }
});

}
