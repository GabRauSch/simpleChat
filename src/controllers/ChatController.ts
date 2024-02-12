import { Request, Response } from "express";
import { Socket } from "socket.io";

type Message = {
    userIdFrom: string,
    userIdTo: string,
    message: string
}

export const handleMessage = (socket: Socket, message: Message)=>{
    socket.broadcast.emit('message', { message, user: socket.id });
}