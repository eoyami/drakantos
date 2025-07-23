import orbe from '@/public/orbe.png'
import orbe_2 from '@/public/orbe_2.png'
import orbe_3 from '@/public/orbe_3.png'
import orbe_4 from '@/public/orbe_4.png'
import orbe_5 from '@/public/orbe_5.png'

type Skills = {
  id: number,
  name: string,
  orbes: Orbes[]
}

export type Orbes = {
  id: number,
  name: string,
  img: string
}

type CharacterProps = {
    id: number,
    name: string,
    smallImg: string,
    bigImg: string,
    alt: string,
    type: "support" | "tank" | "dps" | "none",
    description: string,
    skills: Record<number, Skills[]>,
  }
  
  export const characters: CharacterProps[] = [
    {
      id: 1,
      name: "Ozul",
      smallImg: "/ozul.png",
      bigImg: "/ozul_big.png",
      alt: "Ozul",
      type: "dps",
      description: "Ozul é um assassino sombrio, mestre em ataques furtivos e letais. Sua presença nas sombras é sinônimo de perigo iminente.",
      skills: {
        1: [
          {
            id: 1,
            name: "Lamina do Mameydinouvo",
            orbes: [
              {
                id: 1,
                name: "Orbe do Syleumamou",
                img: orbe.src
              },
              {
                id: 2,
                name: "Orbe do Syleumamou",
                img: orbe_4.src
              },
              {
                id: 3,
                name: "Orbe do Syleumamou",
                img: orbe_5.src
              }
            ],
          },
        ],
          2 : [
            {
            id: 2,
            name: "Carnificina da Mamância",
            orbes: [
              {
                id: 4,
                name: "Orbe do Beta",
                img: orbe_2.src
              },
              {
                id: 5,
                name: "Orbe do Beta",
                img: orbe_5.src
              },
            ]
          },
          ],
          3: [
            {
            id: 3,
            name: "Carnificina da Mamância",
            orbes: [
              {
                id: 6,
                name: "Orbe do Beta",
                img: orbe_3.src
              },
            ]
          },
          ],
          4: [
            {
            id: 4,
            name: "Carnificina da Mamância",
            orbes: []
          },
          ],
          5: [
            {
            id: 5,
            name: "Carnificina da Mamância",
            orbes: []
          },
          ],
          6: [
            {
            id: 6,
            name: "Carnificina da Mamância",
            orbes: []
          }
          ]
        }
      }
    ,
    // {
    //   id: 2,
    //   name: "Arryn",
    //   smallImg: "/arryn.png",
    //   bigImg: "/arryn_big.png",
    //   alt: "Arryn",
    //   type: "dps",
    //   description: "Arryn é um ágil guerreiro, conhecido por sua velocidade e precisão em combate. Sua lâmina é tão rápida quanto mortal.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 3,
    //   name: "Byron",
    //   smallImg: "/byron.png",
    //   bigImg: "/byron_big.png",
    //   alt: "Byron",
    //   type: "support",
    //   description: "Byron é um elementalista que manipula os elementos para proteger aliados e desferir ataques devastadores contra inimigos.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 4,
    //   name: "Iris",
    //   smallImg: "/iris.png",
    //   bigImg: "/iris_big.png",
    //   alt: "Iris",
    //   type: "tank",
    //   description: "Iris é uma ilusionista que utiliza magia para confundir inimigos e proteger seus aliados com escudos mágicos.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 5,
    //   name: "Kavras",
    //   smallImg: "/kavras.png",
    //   bigImg: "/kavras_big.png",
    //   alt: "Kavras",
    //   type: "support",
    //   description: "Kavras é um necromante poderoso, capaz de invocar os mortos e manipular a energia vital para auxiliar seus aliados.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 6,
    //   name: "Korz",
    //   smallImg: "/korz.png",
    //   bigImg: "/korz_big.png",
    //   alt: "Korz",
    //   type: "tank",
    //   description: "Korz é um guerreiro imponente, cuja força bruta e resistência o tornam uma muralha intransponível no campo de batalha.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 7,
    //   name: "Ojore",
    //   smallImg: "/ojore.png",
    //   bigImg: "/ojore_big.png",
    //   alt: "Ojore",
    //   type: "tank",
    //   description: "Ojore é um defensor incansável, sempre na linha de frente para proteger seus companheiros com coragem e determinação.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 8,
    //   name: "Ophis",
    //   smallImg: "/ophis.png",
    //   bigImg: "/ophis_big.png",
    //   alt: "Ophis",
    //   type: "dps",
    //   description: "Ophis é uma feiticeira misteriosa que canaliza o poder do caos para desferir ataques mágicos de grande intensidade.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 9,
    //   name: "Orbryn",
    //   smallImg: "/orbryn.png",
    //   bigImg: "/orbryn_big.png",
    //   alt: "Orbryn",
    //   type: "dps",
    //   description: "Orbryn é um arqueiro preciso, cuja habilidade com o arco é incomparável, atingindo alvos com letalidade à distância.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 10,
    //   name: "Reya",
    //   smallImg: "/reya.png",
    //   bigImg: "/reya_big.png",
    //   alt: "Reya",
    //   type: "dps",
    //   description: "Reya é uma guerreira elétrica, que combina velocidade e ataques de raio para eliminar seus inimigos rapidamente.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 11,
    //   name: "Thomas",
    //   smallImg: "/thomas.png",
    //   bigImg: "/thomas_big.png",
    //   alt: "Thomas",
    //   type: "support",
    //   description: "Thomas é um bardo felino que utiliza melodias encantadoras para fortalecer aliados e enfraquecer adversários.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 12,
    //   name: "Urijor",
    //   smallImg: "/urijor.png",
    //   bigImg: "/urijor_big.png",
    //   alt: "Urijor",
    //   type: "tank",
    //   description: "Urijor, conhecido como o 'Druida Louco', manipula a natureza de forma imprevisível para proteger e atacar com ferocidade.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 13,
    //   name: "faendar",
    //   smallImg: "/faendar.png",
    //   bigImg: "/faendar_big.png",
    //   alt: "faendar",
    //   type: "support",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 14,
    //   name: "irhaal",
    //   smallImg: "/irhaal.png",
    //   bigImg: "/irhaal_big.png",
    //   alt: "irhaal",
    //   type: "dps",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 15,
    //   name: "liam",
    //   smallImg: "/liam.png",
    //   bigImg: "/liam_big.png",
    //   alt: "liam",
    //   type: "tank",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 16,
    //   name: "marly",
    //   smallImg: "/marly.png",
    //   bigImg: "/marly_big.png",
    //   alt: "marly",
    //   type: "support",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 17,
    //   name: "mohazus",
    //   smallImg: "/mohazus.png",
    //   bigImg: "/mohazus_big.png",
    //   alt: "mohazus",
    //   type: "tank",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 18,
    //   name: "yuki",
    //   smallImg: "/yuki.png",
    //   bigImg: "/yuki_big.png",
    //   alt: "yuki",
    //   type: "tank",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 19,
    //   name: "yura",
    //   smallImg: "/yura.png",
    //   bigImg: "/yura_big.png",
    //   alt: "yura",
    //   type: "dps",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
    // {
    //   id: 20,
    //   name: "zeugladius",
    //   smallImg: "/zeugladius.png",
    //   bigImg: "/zeugladius_big.png",
    //   alt: "zeugladius",
    //   type: "support",
    //   description: "PLACEHOLDER",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Lamina do Mameydinouvo"
    //     }
    //   ]
    // },
  ];
  