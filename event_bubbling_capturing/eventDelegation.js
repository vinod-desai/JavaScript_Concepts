// document.querySelector('#category').addEventListener('click', (e) => {
//     // console.log('CLicked!!');
//     // console.log(e.target.id);
//     console.log(e.target.tagName);
//     if (e.target.tagName == 'LI') {
//         window.location.href = '/' + e.target.id;
//     }
// });

document.querySelector('#form').addEventListener('keyup', (e) => {
    // console.log('CLicked!!');
    // console.log(e.target.id);
    console.log(e.target.dataset);
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
});