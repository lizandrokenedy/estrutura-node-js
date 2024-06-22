import { Request, Response } from "express";
import { ConsultCepService } from "../../service/cep/ConsultCepService";
import { ViaCepService } from "../../service/cep/ViaCepService";
import { BrasilAbertoService } from "../../service/cep/BrasilAbertoService";

class ConsultCepController {
  async handle(req: Request, res: Response) {
    const cep = req.params.cep;

    try {
      const consultCepService = new ConsultCepService(new ViaCepService());

      const response = await consultCepService.execute(cep);

      return res.json(response);
    } catch (error) {
      const consultCepService = new ConsultCepService(
        new BrasilAbertoService()
      );

      const response = await consultCepService.execute(cep);

      return res.json(response);
    }
  }
}

export { ConsultCepController };
