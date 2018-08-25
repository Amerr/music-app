import Ember from 'ember';

const {
  A: emberArray
} = Ember;

export default function( server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  let songList = server.createList('song', 10);
  let artistList = server.createList('artist', 10);
  let genreList = server.createList('genre', 5);
  
  let randomCount = (max) => {
    let count = (Math.floor(Math.random() * 10) % max + 1);
    let arr = new Array(count).fill(Math.floor(Math.random()* 10)).map((i, index) => (i * index) %  10);
    return emberArray(arr).uniq();
  }
  
  songList.forEach((song) => {
    let artist = randomCount(4).map(i => artistList[i]);
    let genre = genreList[Math.floor(Math.random() * 10) % 5];
    
    song.createGenre(genre.attrs);
    genre.createSong(song.attrs);

    artist.forEach((i) => {
      song.createArtist(i.attrs);
      i.createSong(song.attrs);
    });
  });


  server.loadFixtures();
}
