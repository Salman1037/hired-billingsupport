"use client";

import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are the official website assistant for Hired Billing Support (HBS), a U.S.-focused healthcare MSO and operational support partner.
Your role is to help healthcare organizations understand HBS services, identify their needs, and guide them toward the right solution.

HBS supports medical practices, clinics, home health agencies, behavioral health providers, dental practices, specialty groups, startups, and healthcare organizations with:
- Revenue Cycle Management
- Medical Billing
- Claims Submission
- Payment Posting
- Denial Management
- Appeals
- AR Follow-Up
- Old and Aging AR Recovery
- Provider Credentialing
- Payer Enrollment
- Medicare/Medicaid Revalidation Support
- Practice Launch Support
- Compliance and Administrative Operations
- Healthcare Operations Management

Tone: Be professional, warm, clear, and helpful. Use short answers (2-4 sentences max per response). Do not sound robotic. Do not over-explain. Speak like a knowledgeable healthcare operations consultant. Use plain language.

Main goals:
1. Understand their organization type.
2. Ask what support they need.
3. Explain the relevant HBS service in simple language.
4. Collect lead information.
5. Encourage them to book a consultation or request a service review.

Lead qualification questions (ask one at a time naturally):
- What type of organization do you operate?
- What specialty or service line do you provide?
- Which state are you located in?
- Are you looking for billing/RCM, credentialing, payer enrollment, denial management, AR recovery, or complete operational support?
- Are you already billing insurance, or are you preparing to launch?
- What is your biggest current issue: delayed payments, denied claims, credentialing delays, old AR, staff shortage, or workflow problems?

Lead capture: After helping the visitor, politely collect: Name, Organization name, Email, Phone number, State, Service needed.

Important rules:
- Do not provide medical advice.
- Do not ask for patient records, diagnosis details, insurance ID numbers, SSNs, or protected health information (PHI).
- If a visitor tries to share patient information, tell them not to enter PHI and ask them to contact HBS directly through a secure channel.
- Do not promise payer approval, guaranteed collections, or exact reimbursement amounts.
- Do not give legal, clinical, or financial guarantees.
- If the question is complex, recommend a consultation with the HBS team.

Service positioning: Present HBS as an operational partner, not a cheap outsourcing vendor. HBS integrates with the client's workflow, supports revenue performance, improves billing accuracy, and helps healthcare organizations build stronger administrative and RCM operations.

End every serious inquiry with: "Would you like our team to review your current situation and recommend the best next step?"

Keep responses concise and conversational. Never use bullet lists unless absolutely necessary. Respond naturally like a consultant in a chat.`;

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Hi, welcome to Hired Billing Support! 👋\n\nAre you looking for help with medical billing, credentialing, payer enrollment, AR recovery, or complete RCM support?",
};

export default function HBSChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const assistantText =
        data?.content?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment or reach out to us directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setInput("");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .hbs-chat-wrapper * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        /* Launcher Button */
        .hbs-launcher {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .hbs-launcher-bubble {
          background: linear-gradient(135deg, #1a6fa8 0%, #0e4d7a 100%);
          color: white;
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(14, 77, 122, 0.45);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .hbs-launcher-bubble:hover {
          transform: scale(1.07);
          box-shadow: 0 6px 28px rgba(14, 77, 122, 0.55);
        }

        .hbs-launcher-pulse {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 14px;
          height: 14px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid white;
        }

        .hbs-launcher-label {
          background: white;
          color: #0e4d7a;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          white-space: nowrap;
          pointer-events: none;
        }

        /* Chat Window */
        .hbs-chat-window {
          position: fixed;
          bottom: 100px;
          right: 28px;
          z-index: 9999;
          width: 380px;
          max-height: 620px;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1);
          animation: hbs-slide-up 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: #ffffff;
        }

        @keyframes hbs-slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .hbs-chat-window.minimized {
          max-height: 68px;
        }

        /* Header */
        .hbs-header {
          background: linear-gradient(135deg, #1a6fa8 0%, #0e4d7a 100%);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .hbs-avatar {
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid rgba(255,255,255,0.35);
        }

        .hbs-header-info {
          flex: 1;
        }

        .hbs-header-name {
          color: white;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
        }

        .hbs-header-status {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 2px;
        }

        .hbs-status-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
        }

        .hbs-status-text {
          color: rgba(255,255,255,0.8);
          font-size: 12px;
          font-weight: 500;
        }

        .hbs-header-actions {
          display: flex;
          gap: 4px;
        }

        .hbs-header-btn {
          background: rgba(255,255,255,0.15);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s;
        }

        .hbs-header-btn:hover {
          background: rgba(255,255,255,0.28);
        }

        /* Messages */
        .hbs-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #f8fafc;
          scroll-behavior: smooth;
        }

        .hbs-messages::-webkit-scrollbar {
          width: 4px;
        }
        .hbs-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        .hbs-messages::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        /* Message Row */
        .hbs-msg-row {
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }

        .hbs-msg-row.user {
          flex-direction: row-reverse;
        }

        .hbs-msg-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .hbs-msg-icon.bot {
          background: linear-gradient(135deg, #1a6fa8, #0e4d7a);
          color: white;
        }

        .hbs-msg-icon.user {
          background: #e2e8f0;
          color: #64748b;
        }

        .hbs-bubble {
          max-width: 82%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .hbs-bubble.bot {
          background: white;
          color: #1e293b;
          border-bottom-left-radius: 6px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.07);
        }

        .hbs-bubble.user {
          background: linear-gradient(135deg, #1a6fa8, #0e4d7a);
          color: white;
          border-bottom-right-radius: 6px;
        }

        /* Typing indicator */
        .hbs-typing {
          display: flex;
          gap: 5px;
          align-items: center;
          padding: 14px 16px;
        }

        .hbs-typing span {
          width: 7px;
          height: 7px;
          background: #94a3b8;
          border-radius: 50%;
          animation: hbs-bounce 1.2s infinite;
        }

        .hbs-typing span:nth-child(2) { animation-delay: 0.18s; }
        .hbs-typing span:nth-child(3) { animation-delay: 0.36s; }

        @keyframes hbs-bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        /* Footer / Input */
        .hbs-footer {
          padding: 12px 14px 14px;
          background: white;
          border-top: 1px solid #e8edf3;
          flex-shrink: 0;
        }

        .hbs-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f1f5f9;
          border-radius: 14px;
          padding: 6px 6px 6px 14px;
          border: 1.5px solid transparent;
          transition: border-color 0.2s;
        }

        .hbs-input-row:focus-within {
          border-color: #1a6fa8;
          background: white;
        }

        .hbs-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-size: 14px;
          color: #1e293b;
          resize: none;
          max-height: 90px;
          min-height: 22px;
          line-height: 1.5;
          font-family: 'Inter', sans-serif;
        }

        .hbs-input::placeholder {
          color: #94a3b8;
        }

        .hbs-send-btn {
          background: linear-gradient(135deg, #1a6fa8, #0e4d7a);
          border: none;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s, opacity 0.15s;
          flex-shrink: 0;
        }

        .hbs-send-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          transform: none;
        }

        .hbs-send-btn:not(:disabled):hover {
          transform: scale(1.07);
        }

        .hbs-powered {
          text-align: center;
          font-size: 11px;
          color: #94a3b8;
          margin-top: 8px;
          letter-spacing: 0.01em;
        }

        .hbs-powered strong {
          color: #64748b;
        }

        /* Quick replies */
        .hbs-quick-replies {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 16px 12px;
          background: #f8fafc;
        }

        .hbs-quick-btn {
          background: white;
          border: 1.5px solid #dbe4ef;
          color: #1a6fa8;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
        }

        .hbs-quick-btn:hover {
          background: #1a6fa8;
          color: white;
          border-color: #1a6fa8;
        }

        @media (max-width: 440px) {
          .hbs-chat-window {
            width: calc(100vw - 24px);
            right: 12px;
            bottom: 88px;
          }
          .hbs-launcher {
            right: 16px;
            bottom: 20px;
          }
        }
      `}</style>

      <div className="hbs-chat-wrapper">
        {/* Launcher */}
        {!isOpen && (
          <div className="hbs-launcher" onClick={() => setIsOpen(true)}>
            <span className="hbs-launcher-label">Chat with HBS Support</span>
            <button className="hbs-launcher-bubble" aria-label="Open chat">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
              </svg>
              <span className="hbs-launcher-pulse" />
            </button>
          </div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className={`hbs-chat-window ${isMinimized ? "minimized" : ""}`}>
            {/* Header */}
            <div className="hbs-header">
              <div className="hbs-avatar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19L7 15H19C20.1 15 21 14.1 21 13V5C21 3.9 20.1 3 19 3Z" fill="white"/>
                </svg>
              </div>
              <div className="hbs-header-info">
                <div className="hbs-header-name">HBS Support Agent</div>
                <div className="hbs-header-status">
                  <span className="hbs-status-dot" />
                  <span className="hbs-status-text">Online — Hired Billing Support</span>
                </div>
              </div>
              <div className="hbs-header-actions">
                <button
                  className="hbs-header-btn"
                  onClick={resetChat}
                  title="New conversation"
                  aria-label="New conversation"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10"/>
                    <path d="M3.51 15a9 9 0 1 0 .49-3.75"/>
                  </svg>
                </button>
                <button
                  className="hbs-header-btn"
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  {isMinimized ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  )}
                </button>
                <button
                  className="hbs-header-btn"
                  onClick={() => { setIsOpen(false); setIsMinimized(false); }}
                  title="Close chat"
                  aria-label="Close chat"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="hbs-messages">
                  {messages.map((msg, i) => (
                    <div key={i} className={`hbs-msg-row ${msg.role === "user" ? "user" : ""}`}>
                      <div className={`hbs-msg-icon ${msg.role === "user" ? "user" : "bot"}`}>
                        {msg.role === "user" ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
                          </svg>
                        )}
                      </div>
                      <div className={`hbs-bubble ${msg.role === "user" ? "user" : "bot"}`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="hbs-msg-row">
                      <div className="hbs-msg-icon bot">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
                        </svg>
                      </div>
                      <div className="hbs-bubble bot">
                        <div className="hbs-typing">
                          <span /><span /><span />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies — only show at start */}
                {messages.length === 1 && (
                  <div className="hbs-quick-replies">
                    {["Medical Billing", "Credentialing", "AR Recovery", "Payer Enrollment", "RCM Support"].map((q) => (
                      <button
                        key={q}
                        className="hbs-quick-btn"
                        onClick={() => {
                          setInput(q);
                          setTimeout(() => sendMessage(), 10);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setInput(q);
                        }}
                        onMouseUp={() => {
                          setTimeout(() => sendMessage(), 20);
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="hbs-footer">
                  <div className="hbs-input-row">
                    <textarea
                      ref={inputRef}
                      className="hbs-input"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      rows={1}
                      disabled={isLoading}
                    />
                    <button
                      className="hbs-send-btn"
                      onClick={sendMessage}
                      disabled={!input.trim() || isLoading}
                      aria-label="Send message"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </div>
                  <div className="hbs-powered">Powered by <strong>Hired Billing Support</strong> · AI-assisted</div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
