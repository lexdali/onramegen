

document.querySelector("button").addEventListener('click', e => {
    
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetch('/261785934')
        .then(res => res.json())
        .then(jsonData => {
            const container = document.getElementById('server-message');
    
            const r = Math.floor(Math.random() * 5);
            const array = jsonData.messages;
    
            container.innerHTML = `<p>${array[r]}</p>`;
        })
        .catch(err => console.log(`error: ${err}`))
    }
  });