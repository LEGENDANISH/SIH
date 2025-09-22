import { useState } from "react";
import { Send, Bot, User, Sparkles, Heart, Brain, Pill, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI health assistant. I can help you with symptoms, medication questions, health tips, and more. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickPrompts = [
    { text: "I have a headache", icon: Brain },
    { text: "Check drug interactions", icon: Pill },
    { text: "Heart palpitations", icon: Heart },
    { text: "Exercise recommendations", icon: Activity },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("headache")) {
      return "I understand you're experiencing a headache. Here are some general suggestions:\n\n• Stay hydrated\n• Rest in a quiet, dark room\n• Apply a cold or warm compress\n• Consider over-the-counter pain relief if appropriate\n\nIf headaches persist, please consult a healthcare professional.";
    }
    if (lowerInput.includes("heart") || lowerInput.includes("palpitation")) {
      return "Heart palpitations can have various causes such as caffeine, stress, dehydration, or lack of sleep. Frequent or severe palpitations should be checked by a doctor.";
    }
    if (lowerInput.includes("exercise") || lowerInput.includes("workout")) {
      return "Aim for 150 minutes of moderate activity per week and include strength training 2+ days per week. Start gradually and listen to your body.";
    }
    if (lowerInput.includes("medication") || lowerInput.includes("drug")) {
      return "I can provide general medication information, but always consult your healthcare provider for interactions, dosage, and side effects.";
    }
    return "Thank you for your question! For personalized medical advice, please consult a healthcare professional.";
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4 animate-pulse">
          <Sparkles className="h-8 w-8 text-rose-500" />
          <h1 className="text-3xl font-bold text-gradient">AI Health Assistant</h1>
        </div>
        <p className="text-gray-500">
          Get instant health information and guidance from our AI-powered assistant
        </p>
      </div>

      {/* Quick Prompts */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-3">Quick prompts to get started:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickPrompts.map((prompt, index) => {
            const Icon = prompt.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickPrompt(prompt.text)}
                className="flex items-center space-x-2 p-3 hover:bg-primary/10 transition-all duration-200 rounded-lg"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium">{prompt.text}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="health-card h-[500px] flex flex-col shadow-lg bg-white rounded-2xl border border-gray-100">
        <ScrollArea className="flex-1 p-6 bg-gray-50 rounded-t-2xl">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`flex max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white ml-3"
                        : "bg-gray-300 text-gray-700 mr-3"
                    }`}
                  >
                    {message.sender === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-md"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 flex flex-col gap-2">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask me about symptoms, medications, or health tips..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-xl shadow-md transition-all"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            ⚠️ This AI assistant provides general information only. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </Card>

      {/* Disclaimer */}
      <Card className="health-card mt-6 bg-yellow-50 border-yellow-200 shadow-sm rounded-xl">
        <div className="flex items-start space-x-3 p-4">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-1">Important Disclaimer</h3>
            <p className="text-sm text-yellow-700">
              This AI assistant is designed to provide general health information and should not replace professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions about medical conditions.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AI;
