import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messageService = new MessagesService();

    const message = await messageService.create({
      //caso admin veja sem preenchido continuará funcionando
      admin_id,
      text,
      user_id,
    });

    return response.json(message);
  }

  // localhost:3333/messages/idDoUser -> por onde irá receber ao invés do body
  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messageService = new MessagesService();
    const list = await messageService.listByUser(id);

    return response.json(list);
  }
}

export { MessagesController };
