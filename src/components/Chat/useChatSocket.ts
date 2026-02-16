import { useEffect, useRef, useState } from 'react'

export const useChatSocket = (isOpen: boolean) => {
  const [messages, setMessages] = useState<string[]>([])
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    if (!isOpen) return

    const socket = new WebSocket('wss://ws.ifelse.io')
    socketRef.current = socket

    socket.onmessage = (event) => {
      setMessages(prev => [...prev, `Server: ${event.data}`])
    }

    socket.onerror = (err) => {
      console.error('WebSocket error', err)
    }

    return () => {
      socket.close()
      socketRef.current = null
    }
  }, [isOpen])

  const sendMessage = (message: string) => {
    if (!message.trim()) return

    setMessages(prev => [...prev, `You: ${message}`])
    setTimeout(() => {
      setMessages(prev => [...prev, 'Support: Thanks for your message, we will contact you shortly.'])
    }, 1500)
  }

  return {
    messages,
    sendMessage,
  }
}
