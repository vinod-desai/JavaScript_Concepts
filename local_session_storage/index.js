window.localStorage.setItem('Cricket', 'T20 World Cup');
// console.log(localStorage.getItem('Cricket'));
const user = {
    name: 'Virat',
    profession: ['Athlete', 'Cricketer']
};
// console.log(String(user));
// console.log(JSON.stringify(user));
// console.log(JSON.parse(JSON.stringify(user)));
localStorage.setItem('user', user);
localStorage.setItem('user_copy', JSON.stringify(user));
console.log(localStorage.getItem('user'));
console.log(localStorage.getItem('user_copy'));
console.log(localStorage.length);


window.sessionStorage.setItem('Cricket', 'T20 World Cup');
console.log(sessionStorage.getItem('Cricket'));
const user = {
    name: 'Virat',
    profession: ['Athlete', 'Cricketer']
};

sessionStorage.setItem('user', user);
sessionStorage.setItem('user_copy', JSON.stringify(user));
console.log(sessionStorage.getItem('user'));
console.log(sessionStorage.getItem('user_copy'));
console.log(sessionStorage.length);