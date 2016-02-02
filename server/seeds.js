module.exports = {
  seed: function(database) {
    // Seed artists
    var saveArtist = function(data) {
      database.save('artist', data);
    };

    [{
      name: 'Some Artist',
      album_ids: [1, 2],
      based_in: 'Los Angeles',
      founding_year: 2001,
    }, {
      name: 'Popular Musician',
      album_ids: [3, 4, 5],
      based_in: 'Detroit',
      founding_year: 1781,
    }, {
      name: 'Backup Singer',
      album_ids: [6, 7, 8],
      based_in: 'Cincinnati',
      founding_year: 1952,
    }, {
      name: 'New Age Thing',
      album_ids: [9, 10],
      based_in: 'London',
      founding_year: 1991,
    }].map(saveArtist);

    // albums
    var saveAlbum = function(data) {
      database.save('album', data);  
    };

    [{
      name: 'Mega Album',
      year: 2001,
      artist_id: 1,
      total_sold: 10001,
      comment_ids: [],
    }, {
      name: 'Bigger Album',
      year: 2002,
      artist_id: 1,
      total_sold: 10002,
      comment_ids: [],
    }, {
      name: 'Hits And Stuff',
      year: 1800,
      artist_id: 2,
      total_sold: 13,
      comment_ids: [],
    }, {
      name: 'Symphony 2.1',
      year: 1801,
      artist_id: 2,
      total_sold: 78975984,
      comment_ids: [],
    }, {
      name: 'Classical Dance Music',
      year: 1802,
      artist_id: 2,
      total_sold: 0,
      comment_ids: [],
    }, {
      name: 'My Boss\'s Songs',
      year: 1953,
      artist_id: 3,
      total_sold: 20,
      comment_ids: [],
    }, {
      name: 'Music Someone Wrote',
      year: 1954,
      artist_id: 3,
      total_sold: 2001,
      comment_ids: [],
    }, {
      name: 'Testing 123',
      year: 1955,
      artist_id: 3,
      total_sold: 52,
      comment_ids: [],
    }, {
      name: 'Ska Blues Fusion',
      year: 1991,
      artist_id: 4,
      total_sold: 71,
      comment_ids: [],
    }, {
      name: 'Reggae Ambient',
      year: 1992,
      artist_id: 4,
      total_sold: 9849574,
      comment_ids: [1],
    }].map(saveAlbum);

    // comments
    var saveComment = function(data) {
      database.save('comment', data);
    };

    [{
      author: 'Evan Willum',
      album_id: 10,
      message: 'Good album, but I liked the first one.',
    }].map(saveComment);
  },
};

