document.addEventListener('DOMContentLoaded', (function() {
    var waitShake = false;
    var syaro = document.getElementById('syaro--pyonpyon');

    function reset() {
      syaro.classList.remove('bounce','shake');
      if (waitShake) {
        waitShake = false;
        syaro.classList.add('shake');
      }
    }

    function reject() {
      if (this.classList.contains('bounce')) {
        waitShake = true;
      } else {
        this.classList.add('shake');
      }
      alert('きゃっ！!触らないでください！！');
    }

    function frightened() {
      if (this.classList.contains('bounce')) {
        waitShake = true;
      } else {
        this.classList.add('shake');
      }
      alert('きゃっ！？何する気ですか！');
    }

    syaro.addEventListener('mouseover', function() {
        this.classList.remove('shake');
        this.classList.add('bounce');
    }, true);

    syaro.addEventListener('click', reject, false);

    syaro.addEventListener('contextmenu', frightened, false);
    syaro.addEventListener('touchmove', frightened, false);

    syaro.addEventListener('webkitAnimationEnd', reset, false);
    syaro.addEventListener('mozAnimationEnd', reset, false);
    syaro.addEventListener('MSAnimationEnd', reset, false);
    syaro.addEventListener('oanimationend', reset, false);
    syaro.addEventListener('animationend', reset, false);


}));
