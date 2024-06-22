export interface ICepService {
  execute: (cep: string) => Promise<ICepResponse>;
}

export interface ICepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
  }
  