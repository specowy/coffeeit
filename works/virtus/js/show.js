
//Burger
document.addEventListener("DOMContentLoaded", function() {
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

//Scroll
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

//Modal

function modfnc(i)
{
  const target= document.getElementById(i);
target.classList.add('is-active');
target.querySelector('.delete').addEventListener('click',   function() {
target.classList.remove('is-active');
});}
