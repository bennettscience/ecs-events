window.onload = () => {
    let wrapper = document.querySelector(`.chat-embed-wrapper`);  
    if(!wrapper) return
    let videoId = wrapper.dataset.videoId;
    if(!videoId) return
    let frame = document.createElement(`iframe`);   
    frame.src = `https://ecs-chat.web.app/chat/${videoId}`;   
    frame.id = `chat-embed`;  
    wrapper.appendChild(frame); 
}