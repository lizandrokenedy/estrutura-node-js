import { Router, Request, Response } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailUserController } from "./controller/user/DetailUserController";
import { authenticated } from "./middleware/authenticated";
import { ConsultCepController } from "./controller/cep/ConsultCepController";

const router = Router();

// get - obeter dados
// post - enviar dados
// delete - deletar dados
// put - atualizar dados
// patch - atualizar poucos dados

router.get("/", (req: Request, res: Response) => {
  //   throw new Error("Erro de validação");
  return res.json({ message: "Welcome to API" });
});

/** User route */
router.post("/users", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);
router.get("/me", authenticated, new DetailUserController().handle);

/** CEP */
router.get("/cep/:cep", authenticated, new ConsultCepController().handle);

export { router };
