const token = "YOUR_KEY"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))
