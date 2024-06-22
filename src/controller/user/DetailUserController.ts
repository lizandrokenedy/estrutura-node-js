import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const detailUserService = new DetailUserService();

    const response = await detailUserService.execute(user_id);

    return res.json(response);
  }
}

export { DetailUserController };
