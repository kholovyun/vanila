
const MD5 = function(d: string): string {
	d = encodeURI(encodeURIComponent(d));
	let result = M(V(Y(X(d), 8 * d.length)));
	return result.toLowerCase();
};
 
function M(d: string) {
	for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
	return f
}
 
function X(d: string) {
	for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
	for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
	return _
}
 
function V(d: any) {
	for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
	return _
}
 
function Y(d: any, _: any) {
	d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
	for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
		var h = m,
			t = f,
			g = r,
			e = i;
		f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
	}
	return Array(m, f, r, i)
}
 
function md5_cmn(d: any, _: any, m: any, f: any, r: any, i: any) {
	return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
}
 
function md5_ff(d: any, _: any, m: any, f: any, r: any, i: any, n: any) {
	return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
}
 
function md5_gg(d: any, _: any, m: any, f: any, r: any, i: any, n: any) {
	return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
}
 
function md5_hh(d: any, _: any, m: any, f: any, r: any, i: any, n: any) {
	return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
}
 
function md5_ii(d: any, _: any, m: any, f: any, r: any, i: any, n: any) {
	return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
}
 
function safe_add(d: any, _: any) {
	var m = (65535 & d) + (65535 & _);
	return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
}
 
function bit_rol(d: any, _: any) {
	return d << _ | d >>> 32 - _
}




const lotsQuantityInput: HTMLElement| null = document.getElementById('lots__quantity');
const auctionStartBtn: HTMLElement| null = document.getElementById('start__auction');
const lots: HTMLElement | null = document.getElementById('lots');
abstract class State {
    abstract name: string;
    abstract raisePrice(product: Product):void;
    abstract setUp(product: Product):void;
    abstract giveToTheWinner(product: Product):void;
    abstract setOff(product: Product):void;
}

class InStockState extends State {
    name = 'inStock'
    raisePrice (product: Product):void{
        customAlert('This lot is inactive yet ...')
    }
    setUp (product: Product):void{
        product.changeState(new ForSaleState())
        setUpChanges()
        customAlert('This lot is activated successfully')
    }
    giveToTheWinner (product: Product):void{
        customAlert('Lot cant go to someone before it was saled')
    }
    setOff (tproduct: Product):void{
        customAlert('Lot cant go back to stock if it is already in stock')
    }
}
class ForSaleState extends State {
    name = 'forSale'
    raisePrice (product: Product):void{
        product.price += 100
        setUpChanges()
        customAlert('Price increased successfully')
    }
    setUp (product: Product):void{
        customAlert('Lot cant set up to auction if it is already has status for Sale')
    }
    giveToTheWinner (product: Product):void{
        if (product.price > 0) {
            product.changeState(new SoldState()) 
            customAlert('lot was successfully sold')
            setUpChanges()
        } 
        else { 
            customAlert('Lot cant be sold for 0 $') 
        }
    }
    setOff (product: Product):void{
        product.changeState(new SoldState()) 
        setUpChanges()
        customAlert('Lot was successfully removed from auction to stock') 
    }
}
class SoldState extends State {
    name = 'sold'
    raisePrice (product: Product):void{
        customAlert('Lot has been sold')
    }
    setUp (product: Product):void{
        customAlert('Lot has been sold')
    }
    giveToTheWinner (product: Product):void{
        customAlert('Lot has been sold')
    }
    setOff (product: Product):void{
        customAlert('Lot has been sold')
    }
}

interface IStrategy {
    sethonoraryСode (product: Product): void
}

class Silver implements IStrategy {
    sethonoraryСode (product: Product): void{
        product.honoraryСode = MD5('Silver -' + product.id)
        
    }
}

class Gold implements IStrategy {
    sethonoraryСode (product: Product):void{
        product.honoraryСode = MD5('Gold -' + product.id)
     }
}

class Platinum implements IStrategy {
    sethonoraryСode (product: Product):void{
        product.honoraryСode = MD5('Platinum -' + product.id)
     }
}
class Context {
    private strategy: IStrategy;
    constructor() {
        this.strategy = new Silver()
    }
    public setStrategy(strategy: IStrategy): void {
        this.strategy = strategy;
    }
    sethonoraryСode (product: Product){
        return this.strategy.sethonoraryСode(product)
     }


}
class  Product {
    id: string = this.idGen();
    name: string = this.nameGen();
    price: number = 0;
    honoraryСode: string = '-';
    state: State = new InStockState();
    context = new Context;
    setStrategy (): void {
        if(this.state.name === 'sold'){
            if(this.price < 500) {
                this.context.setStrategy(new Silver())
                this.sethonoraryСode()
            } else if (this.price < 1000 && this.price > 500){
                this.context.setStrategy(new Gold())
                this.sethonoraryСode()
            } else {
                this.context.setStrategy(new Platinum())
                this.sethonoraryСode()
            }
        }
    }
    sethonoraryСode ():void {
        return this.context.sethonoraryСode(this)
    }
    idGen ():string {
        let letters: string = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        let randomId: string = ''
        for(let i = 0; i < 6; i++){
            let randomNumber: number = randomNumGen(letters.length, 0)
            randomId += randomNumber.toString()
            randomId += letters[randomNumber]
        }
        return randomId
    }
    nameGen (): string {
        let century: number = randomNumGen(20, 1);
        let names: string[] = ['Vase', 'Watch', 'Picture', 'Statue', 'Sword', 'Armor', 'Bone', 'Book', 'Bracelet', 'Crown', 'Money',
        'Coin', 'Shoes', 'Belt', 'Spoon', 'Folk', 'Crystolized Honey', 'Mummy', 'Sarcofag'];
        let countries: string[] = ['Greek', 'French', 'Rome', 'China', 'Japan', 'Turkey', 'Italy', 'Vizanty', 'African', 'Mongol', 'Russian',
        'Spain', 'Cameroon', 'Egypt']
        let randomName: string = `${countries[randomNumGen(countries.length, 0)]} ${names[randomNumGen(names.length, 0)]} of ${century} centure`
        return randomName
    }
    renderLot ():void {
        this.setStrategy()
        const lotContainer: HTMLDivElement = document.createElement('div')
        lotContainer.className ='lotCon'
        const lotId: HTMLParagraphElement = document.createElement('p')
        lotId.innerText = `ID:  ${this.id} `
        const lotName :HTMLElement = document.createElement('h3')
        lotName.innerText  = this.name
        const lotPrice: HTMLParagraphElement = document.createElement('p')
        lotPrice.innerText =`Price:  ${this.price.toString()} $`
        const lotState: HTMLParagraphElement = document.createElement('p')
        const honoraryСode: HTMLParagraphElement = document.createElement('p')
        honoraryСode.innerText = this.honoraryСode
        lotState.innerText = `Status:  ${this.state.name}`
        lotContainer.append(lotId, lotName, lotPrice, lotState, honoraryСode)
        lotContainer.style.width = '300px'
        lotContainer.style.height = '200px'
        lotContainer.style.backgroundColor = 'rgb(7, 53, 35)'
        lotContainer.style.border = '5px solid silver'
        lotContainer.style.color = 'white'
        lotContainer.style.margin = '2em'
        lotContainer.style.textAlign = 'center'
        lotContainer.style.display = 'flex'
        lotContainer.style.flexDirection = 'column'
        lotContainer.style.justifyContent = 'space-between'
        lotContainer.style.padding = '1em'
        lotContainer.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)'
        console.log(1)
        lots?.append(lotContainer)
        const lotControlsContainer: HTMLDivElement = document.createElement('div')
        const raisePriceBtn: HTMLButtonElement = document.createElement('button');
        raisePriceBtn.innerText = 'Raise price'
        raisePriceBtn.addEventListener('click', () => {
            this.raisePrice()
        })
        const setUpBtn: HTMLButtonElement = document.createElement('button');
        setUpBtn.innerText = 'Set up'
        setUpBtn.addEventListener('click', () => {
            this.setUp()
        })
        const giveToTheWinnerBtn: HTMLButtonElement = document.createElement('button');
        giveToTheWinnerBtn.innerText = 'Give lot to winner'
        giveToTheWinnerBtn.addEventListener('click', () => {
            this.giveToTheWinner()
        })
        const setOffBtn: HTMLButtonElement = document.createElement('button');
        setOffBtn.innerText = 'Set off'
         setOffBtn.addEventListener('click', () => {
            this.setOff()
        })
        lotControlsContainer.append(raisePriceBtn, setUpBtn, giveToTheWinnerBtn, setOffBtn)
        lotContainer.append(lotControlsContainer)

    }
    changeState (state : State): void {
        this.state = state;
    }
    raisePrice ():void {
        return this.state.raisePrice(this)
    }
    setUp():void {
        return this.state.setUp(this)
    };
    giveToTheWinner():void {
        this.setStrategy()
        return this.state.giveToTheWinner(this)
    };
    setOff(): void {
        return this.state.setOff(this)
    };
}

const randomNumGen = function (max: number, min: number): number {
   let randomNumber = Math.floor(Math.random() * (max - min) + min)
   return randomNumber
}
const customAlert = function (text: string):void {
    const alertBg: HTMLDivElement = document.createElement('div');
    alertBg.style.width = '100%';
    alertBg.style.height = '100%';
    alertBg.style.backgroundColor = 'rgba(0, 0, 0, 0.54)';
    alertBg.style.position = 'fixed';
    alertBg.style.top = '0';
    alertBg.style.display = 'flex';
    alertBg.style.justifyContent = 'center';
    alertBg.style.alignItems = 'center'
    const alert: HTMLDivElement = document.createElement('div');
    alert.style.width = '500px';
    alert.style.borderRadius = '10px';
    alert.style.height = '200px';
    alert.style.display = 'flex';
    alert.style.padding = '1em';
    alert.style.display = 'flex';
    alert.style.flexDirection = 'column';
    alert.style.fontSize = '25px';
    alert.style.justifyContent = 'center';
    alert.style.alignItems = 'center'
    alert.innerHTML = `
        <h3>${text}</h3>
        `
    alert.style.backgroundColor = 'white';
    const closeAlert: HTMLButtonElement = document.createElement('button');
    closeAlert.style.marginLeft = '25em'
    closeAlert.style.width = '100px'
    closeAlert.style.height = '40px'
    closeAlert.style.borderRadius = '15px'
    closeAlert.style.backgroundColor = 'black'
    closeAlert.style.color = 'white'
    closeAlert.style.marginTop = '2em'
    closeAlert.innerText = 'ok'
    closeAlert.addEventListener('click', () => {
        alertBg.remove()
    })
    alert.append(closeAlert)
    alertBg.append(alert)
    document.body.append(alertBg)
}

let products: Product[] = []

const renderRandomLots = function (): void {
    products = []
    document.querySelectorAll('.lotCon').forEach(el => el.remove())
    for(let i = 0; i < parseInt((lotsQuantityInput as HTMLInputElement)!.value); i++ ){
        let product = new Product
        products.push(product)
    }
    products.forEach(el => el.renderLot())
}
const setUpChanges = function ():void {
    document.querySelectorAll('.lotCon').forEach(el => el.remove())
    products.forEach(el => el.renderLot())
}

auctionStartBtn!.addEventListener('click', () => {
   renderRandomLots()
})

