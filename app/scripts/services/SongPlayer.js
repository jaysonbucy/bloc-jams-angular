(function(){
  function SongPlayer($rootScope, Fixtures){
    var SongPlayer = {};

    /**
    * @desc Album object
    * @type {Object}
    **/
    var currentAlbum = Fixtures.getAlbum();

    /**
    * @function setCurrentTime
    * @desc Set current time (in seconds) of currently playing song
    * @param {Number} time
    */
    SongPlayer.setCurrentTime = function(time) {
        if (currentBuzzObject) {
            currentBuzzObject.setTime(time);
        }
    };

    /**
    * @function getSongIndex
    * @desc Active song object from list of songs
    * @type {Object} song
    **/
    var getSongIndex = function(song){
      //return currentAlbum.songs.indexOf(song);
      var songList = [];
      for (var i = 0; i < currentAlbum.songs.length; i++){
        songList.push(currentAlbum.songs[i].title);
      }
      return songList.indexOf(song.title);
    }

    SongPlayer.currentSong = null;
    SongPlayer.currentTime = null;
    SongPlayer.volume = 80;

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
      currentBuzzObject.bind('timeupdate', function(){
        $rootScope.$apply(function(){
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
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

      SongPlayer.setVolume = function(volume){
        if (currentBuzzObject){
          currentBuzzObject.setVolume(volume);
        }
        SongPlayer.volume = volume;
      };

      return SongPlayer;
    }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
