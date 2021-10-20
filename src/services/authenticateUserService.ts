/*
Receber o códe(string)
Recuperar o acess_token (token que o github disponibiliza para ter acesso Às informações do usuário) no github - Vem do front e o do mobile
Recuperar infos do user no github
Verificar se o usuário existe no DB
--Se esxistir = Gera um token pra ele
Se não = cria no DB e gera um token--

Retornar o token com as infos do usuário
 */

import axios from "axios";
import { response } from "express";
// import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";

interface IAcessTokenResponse {
  acess_token: string;
}

interface IUserResponser {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class authenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/login/acess_token";

    const { data: acessTokenResponse } = await axios.post<IAcessTokenResponse>(
      url,
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code
        },
        headers: {
          Accept: "aplications/json"
        }
      }
    );

    // Infos do usuario
    const response = await axios.get<IUserResponser>(
      "https://api.github.com/user",
      {
        headers: { authoritazion: `Bearer ${acessTokenResponse.acess_token}` }
      }
    );

    // const { login, id, avatar_url, name } = response.data;

    // let user = await prismaClient.user.findFirst({
    //   where: {
    //     github_id: id
    //   }
    // });

    // if (!user) {
    //   user = await prismaClient.user.client({
    //     data: {
    //       github_id: id,
    //       login,
    //       avatar_url,
    //       name
    //     }
    //   });
    // }

    // const token = sign(
    //   {
    //     user: {
    //       name: user.name,
    //       avatar_ur: user.avatar_url,
    //       id: user.id
    //     }
    //   },
    //   process.env.JWT_SECRET,
    //   { subject: user.id, expiresIn: "1d" }
    // );

    return response.data;
  }
}

export { authenticateUserService };
