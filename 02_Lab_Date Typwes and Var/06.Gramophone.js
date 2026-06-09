function gramophone(band, album, song) {
    let songDurations = (album.length * band.length) * song.length / 2;
    let plateRotateDuringSong = songDurations / 2.5; //2.5-The plate makes a full rotation 
    let result = Math.ceil(plateRotateDuringSong);

    console.log(`The plate was rotated ${result} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');