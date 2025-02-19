(function() {
  function Fixtures() {
    var Fixtures = {};

    var albumPicasso = {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl: '/assets/images/album_covers/01.png',
        songs: [
          { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue' },
          { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green' },
          { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red' },
          { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink' },
          { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta' }
        ]
    };

    var albumMarconi = {
        title: 'The Telephone',
        artist: 'Guglielmo Marconi',
        label: 'EM',
        year: '1909',
        albumArtUrl: '/assets/images/album_covers/20.png',
        songs: [
            { title: 'Hello, Operator?', duration: '1:01' },
            { title: 'Ring, ring, ring', duration: '5:01' },
            { title: 'Fits in your pocket', duration: '3:21'},
            { title: 'Can you hear me now?', duration: '3:14' },
            { title: 'Wrong phone number', duration: '2:15'}
        ]
    };

   var albumBucy = {
       title: 'Order of the Awkward',
       artist: 'Backlash',
       label: 'Blizzard',
       year: '2015',
       albumArtUrl: '/assets/images/album_covers/18.png',
       songs: [
           { title: 'Grand Pooba Rock', duration: '4:23' },
           { title: 'Stuff & Things', duration: '3:12' },
           { title: 'KeK', duration: '1:59' },
           { title: 'Hero\'s Sojourn', duration: '2:22' },
           { title: 'Ghost Wolf', duration: '3:49' },
           { title: 'Either Or, Neither Nor', duration: '3:33' }
       ]
   };

   Fixtures.getAlbum = function(){
        return albumPicasso;
    };

    Fixtures.getCollection = function(numberOfAlbums){
      var albumCollection = [];
      for (var i = 0; i < numberOfAlbums; i++){
        albumCollection.push(Fixtures.getAlbum())
      }
      return albumCollection;
    };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
