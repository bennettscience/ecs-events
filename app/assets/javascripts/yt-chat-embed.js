// TODO: Load later in the script to avoid undefined containers
// TODO: Load only on event pages with commercials

window.onload = () => {
    let wrapper = document.querySelector(`.chat-embed-wrapper`);  
    console.log(wrapper)
    let videoId = wrapper.dataset.videoId;
    let frame = document.createElement(`iframe`);   
    frame.src = `https://ecs-chat.web.app/chat/${videoId}`;   
    frame.id = `chat-embed`;  
    wrapper.appendChild(frame); 
}