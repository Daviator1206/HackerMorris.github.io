let a = [
    "Initializing Hack tool",
    "Connecting to the facebook.....",
    "Connecting to the server 1 ",
    "Connection failed. Retrying....",
    "Connecting to the server 2",
    "Connected Successfully.....",
    "Username krishna",
    "200k password tried.....",
    "Match not found",
    "Another 200k password tried....",
    "Match not found",
    "Accessing Acount",
    "Hack Successfully"
  ]
  let audio = new Audio("https://assets.mixkit.co/active_storage/sfx/900/900-preview.mp3")
  
  const sleep = async (seconds)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve(true)}, seconds*1000)
    })
  }
  
  
  const showHack = async (message)=>{
    await sleep(2)
    audio.play()
    console.log(message)
    container.innerHTML += message + "<br>"
  }
  
  
  (async()=>{
    for (let i = 0;i<a.length;i++){
      await showHack(a[i])
    }
  })()