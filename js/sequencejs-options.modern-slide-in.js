$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 4000,
        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "_images/banner1-bg.jpg",
            "_images/banner2-bg.jpg",
            "_images/banner3-bg.jpg",
            "_images/banner4-bg.jpg"
        ]
    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");
});