import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
   async hundle(request: Request, response: Response) {
      const { message } = request.body;
      const { user_Id } = request;

      const service = new CreateMessageService();

      const result = await service.execute(message, user_Id);

      return response.json(result);
   }
}

export { CreateMessageController };