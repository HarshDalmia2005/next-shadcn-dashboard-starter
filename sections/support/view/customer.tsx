'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { SendIcon } from 'lucide-react';
import {
  Ticket,
  ChatMessage,
  tickets,
  initialChatMessagesData
} from '@/constants/data';

export default function CustomerSupportChat() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(tickets[0]);
  const [message, setMessage] = useState<string>('');
  const [chatMessagesData, setChatMessagesData] = useState(
    initialChatMessagesData
  );
  const [Tickets, setTickets] = useState(tickets);

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });

      const newMessage: ChatMessage = {
        id: chatMessagesData[selectedTicket.id].length + 1,
        sender: 'agent',
        message,
        time: currentTime
      };

      setChatMessagesData((prevChatData) => ({
        ...prevChatData,
        [selectedTicket.id]: [...prevChatData[selectedTicket.id], newMessage]
      }));

      setMessage('');
    }
  };

  const handleSolve = () => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === selectedTicket.id
          ? {
              ...selectedTicket,
              status: `${ticket.status == 'Closed' ? 'Open' : 'Closed'}`
            }
          : ticket
      )
    );

    setSelectedTicket((prev) => {
      return {
        ...prev,
        status: `${prev.status == 'Closed' ? 'Open' : 'Closed'}`
      };
    });
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      <div className="hidden w-64 border-r md:block">
        <div className="p-4 font-semibold">Support Dashboard</div>
        <Separator />
        <div className="p-4 font-semibold">Tickets</div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          {Tickets?.map((ticket) => (
            <div
              key={ticket.id}
              className={`cursor-pointer p-4 hover:bg-accent ${
                selectedTicket.id === ticket.id ? 'bg-accent' : ''
              }`}
              onClick={() => handleTicketClick(ticket)}
            >
              <div className="font-medium">{ticket.customer}</div>
              <div className="text-sm text-muted-foreground">
                {ticket.description}
              </div>
              <div
                className={`mt-1 text-xs ${
                  ticket.status === 'Open' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {ticket.status}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <div>
            <div className="font-semibold">{selectedTicket.customer}</div>
            <div className="text-sm text-muted-foreground">
              {selectedTicket.description}
            </div>
          </div>
          <div>
            <Button variant="outline" className="mr-2" onClick={handleSolve}>
              {selectedTicket.status == 'Open' ? 'Solved' : 'Reopen'}
            </Button>
            <Button variant="outline">Report</Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          {chatMessagesData[selectedTicket.id].map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-left' : 'text-right'
              }`}
            >
              <div
                className={`inline-block rounded-lg p-2 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary'
                }`}
              >
                {message.message}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {message.time}
              </div>
            </div>
          ))}
        </ScrollArea>

        <form
          onSubmit={handleSendMessage}
          className="flex items-center border-t p-4"
        >
          <Input
            className="mr-2 flex-1"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" size="icon">
            <SendIcon className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
