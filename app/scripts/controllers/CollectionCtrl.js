(function() {
     function CollectionCtrl() {
		this.album = [];
		for (var 1 = 0; i < 4; i++){
			this.albums.push(angular.copy(albumPicasso));
		}
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();