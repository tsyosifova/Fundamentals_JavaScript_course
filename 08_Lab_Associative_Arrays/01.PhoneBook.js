function phoneBook(arr) {
    let phones = {};

    for (let entry of arr) {
        let [name, phoneNumber] = entry.split(' ');

        phones[name] = phoneNumber;
    }

    for (let key in phones) {
        
        console.log(`${key} -> ${phones[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);