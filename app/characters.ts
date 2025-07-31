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

export type CharacterProps = {
    id: number,
    name: string,
    smallImg: string,
    bigImg: string,
    alt: string,
    type: "support" | "tank" | "dps" | "none",
    description: string,
    skills: Record<number, Skills[]>,
    history: string[]
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
        },
        history: ["WIP"]
      }
    ,
    {
      id: 2,
      name: "Arryn",
      smallImg: "/arryn.png",
      bigImg: "/arryn_big.png",
      alt: "Arryn",
      type: "dps",
      description: "Arryn é um ágil guerreiro, conhecido por sua velocidade e precisão em combate. Sua lâmina é tão rápida quanto mortal.",
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
        },
        history: [
          "Nascida um século após a fundação de Ereluna e treinada incansavelmente desde que aprendeu a andar em todas as artes e habilidades esperadas de uma princesa, Arryn logo descobriu que preferia cavalgar, caçar e praticar arco e flecha a todas as outras lições impostas. Por isso, o druida Faendar tornou-se seu professor favorito, levando-a, junto com outras crianças élficas, a acampamentos onde ensinava a história de sua terra.",
          "Na infância, ela encontrou um aliado e companheiro em Irhaal Varieth, um órfão de sua idade resgatado pela Ordem dos Druidas. Assombrado pela lembrança de seus pais sendo mortos à força por humanos, um ressentimento profundo contra os humanos cresceu dentro dele. uma aura sombria costumava cercar Irhaal, afastando muitos, mas Arryn, tocada por sua dor, o tornou seu companheiro constante. Logo descobriram seu amor em comum pela caça, pelas montarias e pelo combate. Arryn com seu arco, e Irhaal com suas lâminas gêmeas.",
          "A proximidade entre Irhaal e Arryn causava complicações na escolha de um consorte adequado para ela, já que sua presença intimidadora afastava potenciais pretendentes. Embora Arryn nutrisse sentimentos por Irhaal, sua família não o considerava um par apropriado por sua falta de status. Apesar disso, Arryn manteve-se firme, recusando-se a considerar qualquer proposta sem antes ouvir a opinião de Irhaal. Valorizava profundamente sua perspectiva, mesmo sem a intenção de que ele afastasse os pretendentes de propósito.",
          "Por mais que adorasse a vida ativa de patrulheira, Arryn desprezava as tramas sufocantes e confusas da Corte élfica. Lá, sentia-se mais como presa do que caçadora, mais como um troféu do que uma competidora. Por isso, usava qualquer desculpa para evitar a Corte da Rainha, preferindo patrulhar as fronteiras de Ereluna ao lado de Irhaal, em busca de invasores e espiões. Juntos, haviam capturado e enfrentado diversos intrusos, sempre com um forte senso de dever.No entanto, por vezes, Arryn sentia-se desconfortável com a intensidade da retaliação de Irhaal contra humanos. Esses momentos a faziam refletir, e ela secretamente desejava que, com o tempo, Irhaal pudesse curar suas feridas e enxergar além do ódio",
          "Apesar dessas preocupações, Arryn jamais duvidou de que Irhaal pudesse ser redimido. Via nele não apenas a sombra do passado, mas o potencial de um futuro mais luminoso. Essa crença, somada ao laço profundo que compartilhavam, tornou-se a base de sua lealdade inabalável a ele, mesmo diante das complexidades do mundo ao redor."
        ]
    },
    {
      id: 3,
      name: "Byron",
      smallImg: "/byron.png",
      bigImg: "/byron_big.png",
      alt: "Byron",
      type: "support",
      description: "Byron é um elementalista que manipula os elementos para proteger aliados e desferir ataques devastadores contra inimigos.",
      skills: [],
      history: [""]
    },
    {
      id: 4,
      name: "Iris",
      smallImg: "/iris.png",
      bigImg: "/iris_big.png",
      alt: "Iris",
      type: "tank",
      description: "Iris é uma ilusionista que utiliza magia para confundir inimigos e proteger seus aliados com escudos mágicos.",
      skills: [],
      history: [""]
    },
    {
      id: 5,
      name: "Kavras",
      smallImg: "/kavras.png",
      bigImg: "/kavras_big.png",
      alt: "Kavras",
      type: "support",
      description: "Kavras é um necromante poderoso, capaz de invocar os mortos e manipular a energia vital para auxiliar seus aliados.",
      skills: [],
      history: [""]
    },
    {
      id: 6,
      name: "Korz",
      smallImg: "/korz.png",
      bigImg: "/korz_big.png",
      alt: "Korz",
      type: "tank",
      description: "Korz é um guerreiro imponente, cuja força bruta e resistência o tornam uma muralha intransponível no campo de batalha.",
      skills: [],
      history: [""]
    },
    {
      id: 7,
      name: "Ojore",
      smallImg: "/ojore.png",
      bigImg: "/ojore_big.png",
      alt: "Ojore",
      type: "tank",
      description: "Ojore é um defensor incansável, sempre na linha de frente para proteger seus companheiros com coragem e determinação.",
      skills: [],
      history: [""]
    },
    {
      id: 8,
      name: "Ophis",
      smallImg: "/ophis.png",
      bigImg: "/ophis_big.png",
      alt: "Ophis",
      type: "dps",
      description: "Ophis é uma feiticeira misteriosa que canaliza o poder do caos para desferir ataques mágicos de grande intensidade.",
      skills: [],
      history: [""]
    },
    {
      id: 9,
      name: "Orbryn",
      smallImg: "/orbryn.png",
      bigImg: "/orbryn_big.png",
      alt: "Orbryn",
      type: "dps",
      description: "Orbryn é um arqueiro preciso, cuja habilidade com o arco é incomparável, atingindo alvos com letalidade à distância.",
      skills: [],
      history: [""]
    },
    {
      id: 10,
      name: "Reya",
      smallImg: "/reya.png",
      bigImg: "/reya_big.png",
      alt: "Reya",
      type: "dps",
      description: "Reya é uma guerreira elétrica, que combina velocidade e ataques de raio para eliminar seus inimigos rapidamente.",
      skills: [],
      history: [""]
    },
    {
      id: 11,
      name: "Thomas",
      smallImg: "/thomas.png",
      bigImg: "/thomas_big.png",
      alt: "Thomas",
      type: "support",
      description: "Thomas é um bardo felino que utiliza melodias encantadoras para fortalecer aliados e enfraquecer adversários.",
      skills: [],
      history: [""]
    },
    {
      id: 12,
      name: "Urijor",
      smallImg: "/urijor.png",
      bigImg: "/urijor_big.png",
      alt: "Urijor",
      type: "tank",
      description: "Urijor, conhecido como o 'Druida Louco', manipula a natureza de forma imprevisível para proteger e atacar com ferocidade.",
      skills: [],
      history: [""]
    },
    {
      id: 13,
      name: "faendar",
      smallImg: "/faendar.png",
      bigImg: "/faendar_big.png",
      alt: "faendar",
      type: "support",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 14,
      name: "irhaal",
      smallImg: "/irhaal.png",
      bigImg: "/irhaal_big.png",
      alt: "irhaal",
      type: "dps",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 15,
      name: "liam",
      smallImg: "/liam.png",
      bigImg: "/liam_big.png",
      alt: "liam",
      type: "tank",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 16,
      name: "marly",
      smallImg: "/marly.png",
      bigImg: "/marly_big.png",
      alt: "marly",
      type: "support",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 17,
      name: "mohazus",
      smallImg: "/mohazus.png",
      bigImg: "/mohazus_big.png",
      alt: "mohazus",
      type: "tank",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 18,
      name: "yuki",
      smallImg: "/yuki.png",
      bigImg: "/yuki_big.png",
      alt: "yuki",
      type: "tank",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 19,
      name: "yura",
      smallImg: "/yura.png",
      bigImg: "/yura_big.png",
      alt: "yura",
      type: "dps",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
    {
      id: 20,
      name: "zeugladius",
      smallImg: "/zeugladius.png",
      bigImg: "/zeugladius_big.png",
      alt: "zeugladius",
      type: "support",
      description: "PLACEHOLDER",
      skills: [],
      history: [""]
    },
  ];
  