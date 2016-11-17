(function(){
	function AlbumCtrl(Fixtures){
		this.albumData = Fixtures.getAlbum();
		this.songs = [];
		for (var i = 0; i < Fixtures.getAlbum().songs.length; i++){
			this.songs.push(Fixtures.getAlbum().songs[i]);
		}
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', AlbumCtrl])
})();
