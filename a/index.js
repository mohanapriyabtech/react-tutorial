const Web3 =require("web3")
const contractABI = require("./abi.json")


const providerUrl = 'wss://endpoints.omniatech.io/v1/matic/mumbai/ws';
    const web3 = new Web3(new Web3.providers.WebsocketProvider(providerUrl));

    const contractAddress = "0x911A158850e34E5fFAA2431A28a159Db5730E67A"

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    contract.events.LoanCreated()
    .on("data",event=>{
        console.log(event,1)
    })
    .on("error",error=>{
        console.log(error,2)
    })
