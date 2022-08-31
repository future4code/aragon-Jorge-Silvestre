import { IProductsDB, ITagsProductsDB, ITagsDB } from "../../models/Products"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
  {
    id: "101",
    name: "Astrodev",
    email: "astrodev@gmail.com",
    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
    role: USER_ROLES.ADMIN
  },
  {
    id: "102",
    name: "Fulano",
    email: "fulano@gmail.com",
    password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
    role: USER_ROLES.NORMAL
  },
  {
    id: "103",
    name: "Ciclana",
    email: "ciclana@gmail.com",
    password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
    role: USER_ROLES.NORMAL
  }
]


export const products: IProductsDB[] = [
  {
    id: "8371",
    name: "VESTIDO TRICOT CHEVRON"
  },
  {
    id: "8367",
    name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
  },
  {
    id: "8363",
    name: "VESTIDO CURTO MANGA LONGA LUREX"

  },
  {
    id: "8360",
    name: "VESTIDO FEMININO CANELADO"
  },
  {
    id: "8358",
    name: "VESTIDO REGATA FEMININO COM GOLA"
  }
]

export const tagsDB: ITagsDB[] = [
  {
    id: "201",
    name: "balada"
  },
  {
    id: "202",
    name: "casual"
  },
  {
    id: "203",
    name: "passeio"
  },
  {
    id: "204",
    name: "viagem"
  },
  {
    id: "205",
    name: "inverno"
  }
]

export const tagsProducts: ITagsProductsDB[] = [
  {
    id: "301",
    product_id: "8371",
    tag_id: "201"
  },
  {
    id: "302",
    product_id: "8367",
    tag_id: "202"
  },
  {
    id: "303",
    product_id: "8363",
    tag_id: "203"
  },
  {
    id: "304",
    product_id: "8360",
    tag_id: "204"
  },
  {
    id: "305",
    product_id: "8358",
    tag_id: "205"
  }

]