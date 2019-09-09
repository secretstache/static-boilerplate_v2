$(document).ready(function() {
    //pause and play on button click
    var videoEls = $('.module.video video');
    videoEls.each(function() {
        var videoEl = $(this);
        var playBtn = videoEl.parents('.module.video').find('.play-button');
        playBtn[0].addEventListener('click', function() {
            if (videoEl[0].paused) {
                videoEl.parents('.module.video').addClass('playing');
                videoEl[0].play();
            } else {
                videoEl[0].pause();
                videoEl.parents('.module.video').removeClass('playing');
            }
        }, false);
    })
});