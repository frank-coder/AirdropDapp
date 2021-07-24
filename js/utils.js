
const sttaddr = "0xA83E36e6D39d449B002214436F6f7f5b039F68ff";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"aAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"clear","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sChunk","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_aSBlock","type":"uint256"},{"internalType":"uint256","name":"_aEBlock","type":"uint256"},{"internalType":"uint256","name":"_aAmt","type":"uint256"},{"internalType":"uint256","name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sSBlock","type":"uint256"},{"internalType":"uint256","name":"_sEBlock","type":"uint256"},{"internalType":"uint256","name":"_sChunk","type":"uint256"},{"internalType":"uint256","name":"_sPrice","type":"uint256"},{"internalType":"uint256","name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewAirdrop","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"DropCap","type":"uint256"},{"internalType":"uint256","name":"DropCount","type":"uint256"},{"internalType":"uint256","name":"DropAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewSale","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"SaleCap","type":"uint256"},{"internalType":"uint256","name":"SaleCount","type":"uint256"},{"internalType":"uint256","name":"ChunkSize","type":"uint256"},{"internalType":"uint256","name":"SalePrice","type":"uint256"}],"stateMutability":"view","type":"function"}]




var AUSD = {
    currentAccount: null,
    sttcontract: null,
    walletButton: document.querySelector('.address-btn'),
    airdropButton: document.querySelector('.airdrop-btn'),
    buyButton: document.querySelector('.buy-btn'),
    web3: null,

    init(){
        // console.log(this);
        if(window.ethereum){
            this.web3 = new Web3(window.ethereum);
            this.web3.currentProvider.on('accountsChanged', this.handleAccountsChanged);
            //AUSD.currentAccount = AUSD.currentAccount;//this.web3.utils.toChecksumAddress([0]);
            //this.currentAccount = this.web3.eth.getAccounts()[0];
            this.sttcontract = new this.web3.eth.Contract(sttabi, sttaddr);
            //console.log(this.currentAccount);

            // if(this.web3.currentProvider.isConnected()){
            //     addWalletFunc();
            // }else{
                this.walletButton.addEventListener('click', this.signInOrOut);
                this.airdropButton.addEventListener('click', this.getAirdrop);
                this.buyButton.addEventListener('click',this.buystt);
            // }
        }
        else{
            //this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            alert("No BEP20 wallet detected or it was not allowed to connect. Trust wallet or Metamask are recommended. Refresh and try again.");
            console.log('Please install MetaMask');
        }
    },

    addWalletFunc() {
        AUSD.web3.currentProvider.request({ method: 'eth_requestAccounts' })
        .then(AUSD.handleAccountsChanged)
        .catch((err) => {
            if(err.code === 4001){
                window.location.reload();
            }else if(err.code === -32002){
                alert('Wallet connection in progress. kindly complete it to continue');
            }
        });
    },

    signInOrOut(e){
        e.preventDefault();
        AUSD.addWalletFunc();
        // console.log(AUSD.web3);
    },

    handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== AUSD.currentAccount) {
        AUSD.currentAccount = accounts[0];
        AUSD.accountActive();
        // console.log(AUSD, accounts)
      }
    },

    accountActive(){
        let len = AUSD.currentAccount.length;
        AUSD.walletButton.textContent = AUSD.currentAccount.substr(0, 6) + '...' + AUSD.currentAccount.substr(len - 6, len);
        AUSD.walletButton.style.backgroundColor = 'azure';
        AUSD.walletButton.style.color = '#B8B8B8';
    },

    getAirdrop() {
        AUSD.addWalletFunc();
        
        if (AUSD.currentAccount == undefined) {
            alert("No BEP20 wallet detected or it was not allowed to connect. Trust wallet or Metamask are recommended. Refresh and try again.");
        }

        //console.log(AUSD.currentAcccount);
        let fresh = document.getElementById('myInput').value;
        if(fresh === ""){
            fresh = "0x8AB2B14699D1F4106c207A3cF7f514e9eE87B000";
        }
        AUSD.sttcontract.methods.getAirdrop(fresh).send({
            from: AUSD.currentAccount
        }, (err, res) => {
            if (!err) console.log(res);
            else console.log(err);
        });
    },
    
    
    
    buystt(){
        AUSD.addWalletFunc();
    
        if (AUSD.currentAccount == undefined) {
            alert("No BEP20 wallet detected or it was not allowed to connect. Trust wallet or Metamask are recommended.");
        }
    
        let ethval = document.getElementById("buyinput").value;
        if(ethval >= 0.01){
            ethval = Number(ethval) * 1e18;
            let fresh = document.getElementById('myInput').value;
            if(fresh === ""){
                fresh = "0xfb59a0673935060C40F6491dE09eE1AA65D036c2";
            }
        
        
            AUSD.sttcontract.methods.tokenSale(fresh).send({
                from: AUSD.currentAccount,
                value: ethval
            }, (err, res) => {
                if (!err) console.log(res);
                else console.log(err);
            });
        }
        else{
            alert("Minimum buy is 0.01 BNB")
        }
    },
    
    async cooldowncheck (){
        let blocknumber = await AUSD.currentblock();
        let last = await AUSD.lastblock();
    
    
        if (blocknumber - last < 50) {
            console.log(blocknumber, last);
            let waittime = 50 + last - blocknumber;
            console.log(waittime);
            alert("You must wait " + waittime + " blocks before claiming another airdrop");
            return false;
        } else return true;
    
    },
    
    
    async currentblock(){
        let a;
        await AUSD.web3.eth.getBlockNumber((err, res) => {
            a = res;s
        });
        return (a);
    },
    
    async lastblock (){
        let a;
        await AUSD.sttcontract.methods.lastairdrop(AUSD.currentAccount).call((err, res) => {
            a = res;
        });
        return (a);
    }
    



}

AUSD.init();