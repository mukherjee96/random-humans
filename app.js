document.addEventListener('click', action);

function action(e) {
    const qty = parseInt(document.getElementById('qty').value);
    if(e.target.id === 'male') {
        let output = '';
        for(let i=0; i<qty; i++) {
            output += `
                <img class="p-2" src="https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100)}.jpg">
            `;
        }
        document.getElementById('images').innerHTML = output;
    } else if(e.target.id === 'female') {
        let output = '';
        for(let i=0; i<qty; i++) {
            output += `
            <img class="p-2" src="https://randomuser.me/api/portraits/women/${Math.floor(Math.random()*100)}.jpg">
            `;
        }
        document.getElementById('images').innerHTML = output;
    }
}