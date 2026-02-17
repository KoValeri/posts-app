import { BsFillChatLeftDotsFill } from "react-icons/bs"
import { RiCloseLargeLine } from "react-icons/ri"
import { useState, useRef, useEffect } from 'react'
import { useChatSocket } from './useChatSocket'

const SupportChat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { messages, sendMessage } = useChatSocket(isOpen)
    const [input, setInput] = useState('')

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
        }
    }, [isOpen])

    function handleChat() {
        setIsOpen(prev => !prev)
    }

    function handleSend() {
        sendMessage(input)
        setInput('')
    }

    return (
        <>
            {isOpen && (
            <div className="
                fixed bottom-6 right-6
                w-80 h-96
                bg-white
                rounded-xl
                shadow-xl
                flex flex-col
                ">
                <div className="p-3 border-b flex justify-between">
                    <span className="font-semibold">Support</span>
                    <button onClick={handleChat}>
                    <RiCloseLargeLine className="cursor-pointer" />
                    </button>
                </div>

                <div className="flex-1 p-3 overflow-y-auto space-y-2">
                    {messages.map((message, i) => (
                    <div key={i} className="bg-gray-100 p-2 rounded-md text-sm">
                        {message}
                    </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-3 border-t flex gap-2">
                    <input
                    ref={inputRef}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border rounded px-2"
                    placeholder="Type a message..."
                    />

                    <button
                    onClick={handleSend}
                    className="bg-red-800 text-white px-3 rounded cursor-pointer"
                    >
                    Send
                    </button>
                </div>
            </div>
            )}

            <button 
            onClick={handleChat}
            className={`
            fixed bottom-6 right-6
            w-14 h-14
            rounded-full
            bg-red-800
            text-white
            shadow-lg
            text-2xl
            cursor-pointer
            ${isOpen ? `hidden` : `flex justify-center items-center`}
            `}>
                <BsFillChatLeftDotsFill />
            </button>
        </>
    )
}

export default SupportChat
