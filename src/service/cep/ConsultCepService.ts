import { ICepService } from "./contracts/ICepContract";

class ConsultCepService {
  private cepService: ICepService;

  constructor(cepService: ICepService) {
    this.cepService = cepService;
  }

  async execute(cep: string) {
    return await this.cepService.execute(cep);
  }
}

export { ConsultCepService };
