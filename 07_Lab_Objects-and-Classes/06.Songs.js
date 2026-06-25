function solve(arrDate) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

let songNumber = arrDate.shift();
let filterdate = arrDate.pop();
let songDateArr = arrDate;

let objArr = [];

for (let songDate of songDateArr) {
    
    let [typeList, name, time] = songDate.split('_');
    
    let song = new Song(typeList, name, time);
    
    objArr.push(song);
    
}

     if (filterdate !== `all`) {
        objArr = objArr.filter(s => s.typeList === filterdate);
    }

    let songName = objArr.map(s => s.name);

    console.log(songName.join('\n'));

}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);