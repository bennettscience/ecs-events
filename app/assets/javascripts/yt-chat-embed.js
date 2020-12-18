// TODO: Load later in the script to avoid undefined containers
// TODO: Load only on event pages with commercials
// TODO: regex the video ID
let frame = document.createElement(`iframe`);  
frame.referrerPolicy = `origin`;  
frame.src = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`;   
frame.id = `chat-embed`;  
let wrapper = document.querySelector(`.chat-embed-wrapper`);  
wrapper.appendChild(frame); 