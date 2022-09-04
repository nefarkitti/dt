//ma

const data = document.getElementById('data')
axios.get('https://raw.githubusercontent.com/nefarkitti/dt/main/thing.json')
  .then(function (response) {
    let json = response.data
    console.log(json)
    data.innerHTML = `<b>${json[0]}</b>`
  });