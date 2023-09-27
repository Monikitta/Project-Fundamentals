function bitcoinMining(params) {
    

    let firstDay = 0;
    let firstBitcoinDay = 0;
    let money = 0;
    let boughtBitcoins = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51


    for(let day = 1; day <= params.length; day++) {

        let bitcoins = Number(params[day-1]);

        if(day % 3 === 0) {
            money *= 0.70;
        }

        bitcoins *= goldPrice;
        money += bitcoins;

        
        while(money >= bitcoinPrice) {

            boughtBitcoins++;
            money -= bitcoinPrice;
            firstDay++
        }

        if(firstDay === 1) {
           firstBitcoinDay = day; 
        }
        
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if(boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
 
}

bitcoinMining([3124.15, 504.212, 2511.124]);