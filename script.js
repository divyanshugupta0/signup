$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });


//  =======================================================mobile prohibit==========================================

// Detect if the user is accessing from a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect if the user is accessing from a mobile device
function redirectIfMobile() {
    if (isMobile()) {
        // Redirect to a different page
        window.location.href = "https://example.com/not-allowed-on-mobile.html";
    }
}

// Call the function to check and redirect on page load
window.onload = redirectIfMobile;


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "mobile_not_supported.html";
}


$('.navigation .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navigation .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
var typed = new Typed(".typing", {
    strings: ["Editor", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Editor", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

});



 /*----------------------============================CHATBOT================================-------------------------------*/


  








 const chatbotToggler = document.querySelector(".chatbot-toggler");
 const closeBtn = document.querySelector(".close-btn");
 const chatbox = document.querySelector(".chatbox");
 const chatInput = document.querySelector(".chat-input textarea");
 const sendChatBtn = document.querySelector(".chat-input span");
 
 let userMessage = null; // Variable to store user's message
 const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
 const inputInitHeight = chatInput.scrollHeight;
 
 const createChatLi = (message, className) => {
     // Create a chat <li> element with passed message and className
     const chatLi = document.createElement("li");
     chatLi.classList.add("chat", `${className}`);
     let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
     chatLi.innerHTML = chatContent;
     chatLi.querySelector("p").textContent = message;
     return chatLi; // return chat <li> element
 }
 
 const generateResponse = (chatElement) => {
     const API_URL = "https://api.openai.com/v1/chat/completions";
     const messageElement = chatElement.querySelector("p");
 
     // Define the properties and message for the API request
     const requestOptions = {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${API_KEY}`
         },
         body: JSON.stringify({
             model: "gpt-3.5-turbo",
             messages: [{role: "user", content: userMessage}],
         })
     }
 
     // Send POST request to API, get response and set the reponse as paragraph text
     fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
         messageElement.textContent = data.choices[0].message.content.trim();
     }).catch(() => {
         messageElement.classList.add("error");
         messageElement.textContent = "Oops! Something went wrong. Please try again.";
     }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
 }
 
 const handleChat = () => {
     userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
     if(!userMessage) return;
 
     // Clear the input textarea and set its height to default
     chatInput.value = "";
     chatInput.style.height = `${inputInitHeight}px`;
 
     // Append the user's message to the chatbox
     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
     chatbox.scrollTo(0, chatbox.scrollHeight);
     
     setTimeout(() => {
         // Display "Thinking..." message while waiting for the response
         const incomingChatLi = createChatLi("Thinking...", "incoming");
         chatbox.appendChild(incomingChatLi);
         chatbox.scrollTo(0, chatbox.scrollHeight);
         generateResponse(incomingChatLi);
     }, 600);
 }
 
 chatInput.addEventListener("input", () => {
     // Adjust the height of the input textarea based on its content
     chatInput.style.height = `${inputInitHeight}px`;
     chatInput.style.height = `${chatInput.scrollHeight}px`;
 });
 
 chatInput.addEventListener("keydown", (e) => {
     // If Enter key is pressed without Shift key and the window 
     // width is greater than 800px, handle the chat
     if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
         e.preventDefault();
         handleChat();
     }
 });
 
 sendChatBtn.addEventListener("click", handleChat);
 closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
 chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));






//  =======================================================mobile prohibit==========================================

// Detect if the user is accessing from a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect if the user is accessing from a mobile device
function redirectIfMobile() {
    if (isMobile()) {
        // Redirect to a different page
        window.location.href = "https://example.com/not-allowed-on-mobile.html";
    }
}

// Call the function to check and redirect on page load
window.onload = redirectIfMobile;


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "mobile_not_supported.html";
}
