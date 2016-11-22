(function(){
  function SongPlayer(){
    var SongPlayer = {};
    SongPlayer.currentSong = null;

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
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      SongPlayer.currentSong = song;
    };

    /**
    * @function playSong
    * @desc Loads and plays the current song as currentBuzzObject
    * @param {Object} song
    * I hate commenting code
    **/
    var playSong = function(song){
      currentBuzzObject.play(song);
      song.playing = true;
    };

    SongPlayer.play = function(song){
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song){
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song){
        if (currentBuzzObject.isPaused()){
          currentBuzzObject.play();
        }
      }

    };

    SongPlayer.pause = function(song){
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };
    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
