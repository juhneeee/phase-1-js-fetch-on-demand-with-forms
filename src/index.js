const init = () => {
    const inputForm = document.querySelector('form');

    // inputForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     console.log(event.target.children[1].value);

    // })
    // let arrTitle
    // fetch('http://localhost:3000/movies')
    // .then(response => response.json())
    // .then(data => arrTitler(data));

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
      
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;;
        });
    });
      
}

document.addEventListener('DOMContentLoaded', init)

function arrTitler(arrObj){
    let newArr = arrObj.map(obj => obj.title);
    console.log(newArr);
    arrTitle = [...newArr]
}