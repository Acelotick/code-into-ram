const colors = ['\x1b[31m', '\x1b[33m', '\x1b[32m', '\x1b[36m', '\x1b[34m', '\x1b[35m'];

const rainbow = text => {
  return text.split('').map((char, i) => colors[i % colors.length] + char).join('') + '\x1b[0m';
};

const text = 'Код который выполняется в озу, салам брат папалам йоу.';
let i = 0;

setInterval(() => {
    console.clear();
    console.log(rainbow(text.slice(i) + ' ' + text.slice(0, i)));
    i = (i + 1) % text.length;
}, 50);