// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotBottle = document.getElementById('chatbot-bottle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const sendMessageBtn = document.getElementById('send-message');
    
    let isChatbotOpen = false;
    
    // Toggle chatbot window
    if (chatbotBottle) {
        chatbotBottle.addEventListener('click', function() {
            if (!isChatbotOpen) {
                chatbotWindow.style.display = 'flex';
                isChatbotOpen = true;
                
                // Greet with voice
                speakMessage("Woof! I'm PawBot, your pet care buddy! How can I help you today?");
            } else {
                chatbotWindow.style.display = 'none';
                isChatbotOpen = false;
            }
        });
    }
    
    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Generate bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
            speakMessage(response);
        }, 1000);
    }
    
    // Send message on button click or Enter key
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', sendMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Text-to-speech function
    function speakMessage(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1.2;
            speechSynthesis.speak(utterance);
        }
    }
    
    // Generate bot responses
    function generateResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('food') || lowerMessage.includes('feed') || lowerMessage.includes('diet')) {
            return "A balanced diet is essential for pets! Dogs need protein-rich food, while cats are obligate carnivores. Always provide fresh water and avoid foods like chocolate, grapes, and onions which are toxic to pets.";
        } else if (lowerMessage.includes('exercise') || lowerMessage.includes('walk') || lowerMessage.includes('play')) {
            return "Regular exercise keeps pets healthy and happy! Dogs typically need 30 minutes to 2 hours of activity daily. Cats enjoy interactive toys and climbing structures. Adjust based on your pet's age, breed, and health.";
        } else if (lowerMessage.includes('groom') || lowerMessage.includes('bath') || lowerMessage.includes('brush')) {
            return "Grooming needs vary by breed. Most dogs benefit from weekly brushing and baths every 4-6 weeks. Cats groom themselves but may need help with brushing, especially long-haired breeds. Don't forget nail trims!";
        } else if (lowerMessage.includes('vet') || lowerMessage.includes('health') || lowerMessage.includes('sick')) {
            return "Annual vet check-ups are important for preventive care. Watch for signs of illness like changes in appetite, behavior, or energy levels. Keep vaccinations current and discuss parasite prevention with your vet.";
        } else if (lowerMessage.includes('adopt') || lowerMessage.includes('shelter') || lowerMessage.includes('rescue')) {
            return "Adoption saves lives! Shelter pets make wonderful companions. Consider your lifestyle when choosing a pet - energy level, size, and grooming needs. Many shelters have trial periods to ensure it's a good match.";
        } else if (lowerMessage.includes('train') || lowerMessage.includes('behavior') || lowerMessage.includes('obedience')) {
            return "Positive reinforcement training works best! Reward good behavior with treats and praise. Be patient and consistent. Puppy classes or obedience training can help socialize your pet and strengthen your bond.";
        } else if (lowerMessage.includes('cat') || lowerMessage.includes('kitten')) {
            return "Cats need vertical space like cat trees, scratching posts, and hiding spots. Provide a litter box in a quiet location and clean it daily. Interactive play helps prevent behavior problems and keeps them mentally stimulated.";
        } else if (lowerMessage.includes('dog') || lowerMessage.includes('puppy')) {
            return "Dogs thrive on routine and clear boundaries. Socialization with people and other dogs is important, especially during puppyhood. Crate training can help with house training and provide a safe space for your dog.";
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            return "You're welcome! I'm always here to help with your pet care questions. Remember, a well-cared-for pet is a happy pet!";
        } else {
            return "I'm PawBot, here to help with pet care questions! You can ask me about feeding, exercise, grooming, training, or anything else related to pet care. What would you like to know?";
        }
    }
});