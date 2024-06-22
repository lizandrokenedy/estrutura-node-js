import axios from "axios";
import { ICepResponse, ICepService } from "./contracts/ICepContract";

class BrasilAbertoService implements ICepService {
  async execute(cep: string): Promise<ICepResponse> {
    try {
      const url = this.buildUrl(cep);
      console.log("CONSULTANDO NO BRASIL ABERTO");
      const response = await axios.get(url);

      const data = response.data.result;

      return this.normalize(data);
    } catch (error) {
      throw new Error("Cep inválido.");
    }
  }

  private buildUrl(cep: string): string {
    return `${process.env.BRASIL_ABERTO_API}/v1/zipcode/${cep}`;
  }

  private normalize(data: any): ICepResponse {
    return {
      cep: data.zipcode,
      logradouro: data.street,
      complemento: data.complement,
      bairro: data.district,
      localidade: data.city,
      uf: data.stateShortname,
      ibge: data.ibgeId,
    };
  }
}

export { BrasilAbertoService };
