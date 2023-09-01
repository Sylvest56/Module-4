(function (window) {
    var speakWord = "GoodBye";
  
    var byeSpeaker = function speak(name) {
      console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);