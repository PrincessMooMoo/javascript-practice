function showTime() {
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    document.querySelector('#month').innerHTML = months[date.getMonth()];
    document.querySelector('#day').innerHTML = date.getDate() + ",";
    document.querySelector('#year').innerHTML = date.getFullYear();
    document.querySelector('#hour').innerHTML = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    document.querySelector('#minutes').innerHTML = date.getMinutes();
    document.querySelector('#seconds').innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
}
setInterval(showTime, 1000);