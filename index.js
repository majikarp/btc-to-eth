exports.toEth = function(amount) {

  const https = require("https");
  const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=ETH';

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
	
      var obj = JSON.parse(data);
      var eth_price = amount * obj["ETH"];
      
      body = eth_price;
    });
    res.on("end", () => {
      console.log(body);
    });
  });

}

