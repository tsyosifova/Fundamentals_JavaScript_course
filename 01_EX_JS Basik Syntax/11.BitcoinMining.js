function bitcoinMining (input) {
    let priceBitcoin = 11949;
    let priceOneGold = 67.51;
    let totalBitcoins = 0;
    let firstDayBitcoin = 0;
    let leftMoney = 0;
    let shiftsCount = 0;

    for (let i = 0; i < input.length; i++) {
        let currentGold = input[i];
        shiftsCount++;
                
        if (shiftsCount % 3 === 0){
            currentGold *= 0.70;
        } 

        let currentGoldSum = currentGold * priceOneGold;

        leftMoney += currentGoldSum;

        
        while (leftMoney >= priceBitcoin) {
            totalBitcoins++;
            
            if (totalBitcoins === 1) {
            firstDayBitcoin = shiftsCount;
            }
            
            leftMoney -= priceBitcoin;
        }

    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    
    if(totalBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayBitcoin}`);
    }
           
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);

}

//bitcoinMining ([100, 200, 300]);
//bitcoinMining ([50, 100]);
bitcoinMining ([3124.15, 504.212, 2511.124]);