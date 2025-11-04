import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Shield } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickReplies = [
  'Tell me about your services',
  'Penetration testing info',
  'Phishing simulations',
  'Get a quote',
];

const botResponses: { [key: string]: string } = {
  'hello': 'Hello! I\'m the MesoSec Security Assistant. How can I help you secure your digital assets today?',
  'hi': 'Hi there! Ready to discuss your cybersecurity needs?',
  'services': 'We offer 4 core services:\n\n• External Penetration Testing\n• Internal Penetration Testing\n• Web Application Penetration Testing\n• Phishing Simulations\n\nWhich would you like to know more about?',
  'penetration testing': 'Our penetration testing services simulate real-world attacks to identify vulnerabilities before malicious actors do. We offer both external and internal testing, covering network infrastructure, applications, and security controls.',
  'phishing': 'Our phishing simulations test your employees\' awareness with realistic attack scenarios. We provide comprehensive training programs and detailed reporting to help strengthen your human firewall.',
  'quote': 'I\'d be happy to help you get a quote! Please scroll down to our contact section or email us at contact@mesosec.io with your specific requirements.',
  'price': 'Pricing varies based on scope and complexity. Please contact us at contact@mesosec.io for a custom quote tailored to your needs.',
  'contact': 'You can reach us at:\n\n📧 contact@mesosec.io\n📞 +1 (555) 123-4567\n\nOr fill out the contact form on this page!',
  'help': 'I can help you with:\n\n• Information about our services\n• Penetration testing details\n• Phishing simulation info\n• Getting a quote\n• Contact information\n\nWhat would you like to know?',
  'default': 'I\'m here to help! You can ask me about our services, penetration testing, phishing simulations, or how to get in touch. What would you like to know?'
};

function getBotResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return botResponses['hello'];
  }
  if (lowerMessage.includes('service')) {
    return botResponses['services'];
  }
  if (lowerMessage.includes('penetration') || lowerMessage.includes('pentest') || lowerMessage.includes('testing')) {
    return botResponses['penetration testing'];
  }
  if (lowerMessage.includes('phishing')) {
    return botResponses['phishing'];
  }
  if (lowerMessage.includes('quote') || lowerMessage.includes('pricing')) {
    return botResponses['quote'];
  }
  if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return botResponses['price'];
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
    return botResponses['contact'];
  }
  if (lowerMessage.includes('help')) {
    return botResponses['help'];
  }
  
  return botResponses['default'];
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to MesoSec Security! I\'m your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 group cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="pointer-events-none"
            >
              <MessageCircle className="w-6 h-6 pointer-events-none" />
            </motion.div>
            
            {/* Notification dot */}
            <motion.div
              className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white pointer-events-none"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />

            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400 pointer-events-none"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-8 z-50 w-96 h-[600px] bg-slate-950 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border-b border-cyan-500/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/30 blur-lg rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Shield className="w-8 h-8 text-cyan-400 relative" />
                </div>
                <div>
                  <h3 className="text-white font-mono">MESOSEC AI</h3>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                style={{ cursor: 'pointer' }}
              >
                <X className="w-5 h-5 pointer-events-none" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-slate-900 border border-cyan-500/20 text-slate-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="p-3 border-t border-cyan-500/20 bg-slate-950/50">
                <p className="text-xs text-slate-400 mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-slate-900 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-cyan-500/30 bg-slate-950">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-900 border-cyan-500/30 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
