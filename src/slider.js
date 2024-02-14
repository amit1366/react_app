console.log('hello this is slider');
function live(selector, event, callback, context) {
    /****Helper Functions****/
    // helper for enabling IE 8 event bindings
    function addEvent(el, type, handler) {
      if (el.attachEvent) el.attachEvent('on' + type, handler);
      else el.addEventListener(type, handler);
    }
    // live binding helper using matchesSelector
    function live(selector, event, callback, context) {
      addEvent(context || document, event, (e) => {
        let found,
          el = e.target || e.srcElement;
        while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
        if (found) callback.call(el, e);
      });
    }
    live(selector, event, callback, context);
  }

  
var slides = document.querySelectorAll('.swiper-slide');
var slidecount = 0;

slides.forEach((el, i) => {
    el.style.left = `${i * 100}%`;
});


var slideimage = () => {
    slides.forEach((el, i) => {
        el.style.transform = `translateX(-${slidecount * 100}%)`;
    });
};

live('.swiper-button-next', 'click', function() {
    slidecount++;
    if (slidecount >= slides.length) {
        slidecount = 0; // Reset slide count to first slide
    }
    slideimage();
});


live('.swiper-button-prev', 'click', function() {
    slidecount--;
    if (slidecount < 0) {
        slidecount = slides.length - 1; // Set slide count to last slide
    }
    slideimage();
});
