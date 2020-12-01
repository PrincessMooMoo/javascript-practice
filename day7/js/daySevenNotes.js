const storeData = {
    items: [],
    name: 'GW Market',
    ui: {
        body: null,
        header: null,
        itemList: null,
    }
};

// const item = {
//     price: 500,
//     title: 'usb thumb drive',
//     description: '16gb thumb drive',
//     onSale: true
// };

storeData.items.push(
    createItem(
        500,
        'usb thumb drive',
        '16gb',
        true
    ),
    createItem(
        50000,
        'Brand tv',
        '75 inch curved',
        false
    ),
);//he made some additional copies and changed the data on createItem
storeData.ui.body = document.querySelector('body');
storeData.ui.header = document.createElement('h1');
storeData.ui.itemList = document.createElement('ul');

storeData.ui.body.appendChild(storeData.ui.header);
storeData.ui.header.innerText = storeData.name;
storeData.ui.header.style.textAlign = 'center';

storeData.ui.body.appendChild(storeData.ui.itemList);

function addStoreItemsToList(item) {
    const li = document.createElement('li');
    storeData.ui.itemList.appendChild(li);
    const ul = document.createElement('ul');
    li.appendChild(ul);

    createDetail('Price', 'price');
    createDetail('Title', 'title');
    createDetail('Desc', 'description');
    createDetail('Sale', 'onSale');

    function createDetail(detailName, property) {
        const detailLi = document.createElement('li');
        ul.appendChild(detailLi);
        detailLi.innerHTML = detailName + ': ' + convertCentsToDollars(item[property]);
    }
    function convertCentsToDollars(pennies) {
        if (typeof pennies === 'number') {
        const newString = String(pennies);
        const array = newString.split('');
        array.splice(-2, 0, '.');
        console.log(array);
        const convertedString = array.join('');
        return '$' + convertedString;
        } else {
            return pennies;
        }
    }
}
storeData.items.forEach( function (item){
    addStoreItemsToList(item);
})








console.log(storeData);

function createItem(price, title, description, onSale) {
    return {
        price: price,
        title: title,
        description,
        onSale,
    }
}