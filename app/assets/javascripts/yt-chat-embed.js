window.onload = () => {
    let wrapper = document.querySelector(`.chat-embed-wrapper`);
    if (!wrapper) return
    // let videoId = wrapper.dataset.videoId;
    // if (!videoId) return
    let frame = document.createElement(`div`);
    frame.innerText = `Thank you for participating in the event. The chat is being archived and will be added back to the session when that process is complete.`
    frame.style.marginTop = '20px';
    frame.style.border = `1px solid #eee`;
    frame.style.borderRadius = `2px`;
    frame.style.display = `block`;
    frame.style.height = `150px`;
    frame.style.padding = `10px`;
    // frame.src = `https://ecs-chat.web.app/rooms/${videoId}`;
    // frame.id = `chat-embed`;
    wrapper.appendChild(frame);
}