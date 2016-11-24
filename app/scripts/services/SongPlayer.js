(function(){
  function SongPlayer(Fixtures){
    var SongPlayer = {};

    /**
    * @desc Album object
    * @type {Object}
    **/
    var currentAlbum = Fixtures.getAlbum();

    /**
    * @function getSongIndex
    * @desc Active song object from list of songs
    * @type {Object} song
    **/
    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
    }

    SongPlayer.currentSong = null;
    SongPlayer.currentTime = null;

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
      currentBuzzObject.play();
      song.playing = true;
    };

    /**
    * @function stopSong
    * @desc Stops current song playing
    * @param {Object} song
    **/
    var stopSong = function(song){
      currentBuzzObject.stop();
      song.playing = false;
    }

    SongPlayer.play = function(song){
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song){
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song){
        if (currentBuzzObject.isPaused()){
          playSong(song);
        }
      }

    };

    SongPlayer.pause = function(song){
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
      };

      SongPlayer.previous = function(song){
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex--;
        if (currentSongIndex < 0){
          stopSong(song);
        } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
        }
      };

      SongPlayer.next = function(){
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex++;
        var lastSongIndex = currentAlbum.songs.length -1;
        if (currentSongIndex > lastSongIndex){
          stopSong(SongPlayer.currentSong);
        } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
        }
      };

      return SongPlayer;
    };

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
