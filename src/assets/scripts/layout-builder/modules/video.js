$(document).ready(function() {
    //pause and play on button click

    var videoContainer = $('.video-wrapper');
    videoContainer.on('click', function() {
        if (videoContainer.hasClass('playing')) {
            videoContainer.find('video')[0].pause();
            videoContainer.removeClass('playing');
        } else {
            videoContainer.find('video')[0].play();
            videoContainer.addClass('playing');
        }
    });
})