function WriteAddressBook(arr) {
    let addressBook = {};

    for (let entry of arr ) {
        let [name, address] = entry.split(':');

        addressBook[name] = address;
    }

    let addressBookArr = Object.entries(addressBook);

    let sorted = addressBookArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
}

WriteAddressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);