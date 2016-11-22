(function(){
  function SongPlayer(){
    var SongPlayer = {};
    var currentSong = null;

    /**
    * @desc Buzz object audio file
    * @type {Object}
    *commented code is poorly written code
    */
    var currentBuzzObject = null;


    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    * commented code is poorly written code
    */
    var setSong = function(song){
      console.log(song);
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      currentSong = song;
    };

    /**
    * @function playSong
    * @desc Loads and plays the current song as currentBuzzObject
    * @param {Object} song
    * I hate commenting code
    **/
    var playSong = function(song){
      currentBuzzObject.play();
      song.playing = true;
    };

    SongPlayer.play = function(song){
      console.log("In the play functionality");
      if (currentSong !== song){
        setSong(song);
        playSong(song);
      } else if (currentSong === song){
        if (currentBuzzObject.isPaused()){
          currentBuzzObject.play();
        }
      }

    };

    SongPlayer.pause = function(song){
      currentBuzzObject.pause();
      song.playing = false;
    };
    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
