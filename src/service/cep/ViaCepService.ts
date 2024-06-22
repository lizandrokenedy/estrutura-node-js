import axios from "axios";
import { ICepResponse, ICepService } from "./contracts/ICepContract";

class ViaCepService implements ICepService {
  async execute(cep: string): Promise<ICepResponse> {
    const url = this.buildUrl(cep);
    console.log("CONSULTANDO NO VIA CEP");
    const response = await axios.get(url);

    if (response.data?.erro) {
      throw new Error("Cep inválido.");
    }

    const data = response.data;

    return this.normalize(data);
  }

  private buildUrl(cep: string): string {
    return `${process.env.VIA_CEP_API}/ws/${cep}/json/`;
  }

  private normalize(data: any): ICepResponse {
    return {
      cep: data.cep,
      logradouro: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,
      ibge: data.ibge,
    };
  }
}

export { ViaCepService };
