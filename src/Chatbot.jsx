import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey! Need some hype or advice for your next win?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const botReplies = [
    "You're crushing it today! Keep that momentum.",
    "Small steps are still steps. What's next?",
    "Take a breath, you've got this.",
    "That sounds awesome. Log that as a win!"
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    // Simulate bot thinking then replying
    setTimeout(() => {
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      setMessages(prev => [...prev, { text: randomReply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl flex flex-col border border-gray-200 mb-4 overflow-hidden">
          <div className="bg-[#F97316] text-white p-4 font-bold">
            VibeBot ⚡️
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-3 rounded-xl max-w-[80%] ${msg.isBot ? 'bg-gray-200 text-gray-800' : 'bg-[#F97316] text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for advice..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
            <button onClick={handleSend} className="bg-[#F97316] text-white px-4 rounded-lg font-bold">
              &gt;
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#F97316] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-105 transition-transform float-right"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
};

export default Chatbot;