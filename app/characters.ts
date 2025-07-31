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
        history: ["Não tenho a história do Ozul. Caso queira me mandar, discord: eoyami"]
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
          "Arryn Valfeena",
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
      history: [
        "Byron Grimward",
        "Byron Grimward é o atual Reitor da Academia de Akamond e amplamente reconhecido como o mago mais poderoso vivo. Em um mundo onde a maioria dos conjuradores consegue se harmonizar com um ou dois elementos, geralmente guiados pelo próprio fluxo de mana, Byron é uma exceção rara. Sua conexão é natural e fluida com os principais elementos: vento, gelo e fogo. E além desse talento, ele domina a arte da cronomancia, usando a magia temporal com uma precisão que beira o divino.",
        "Sua versatilidade incomparável tanto nas artes elementais quanto no tempo lhe rendeu uma reputação que vai muito além das salas flutuantes de Akamond. Entre alunos e estudiosos, Byron não é apenas respeitado; ele é temido, reverenciado e estudado.",
        "Como Reitor, Byron também lidera o Alto Conselho, um seleto grupo formado pelos magos mais poderosos e influentes do continente. O Conselho existe para preservar os ensinamentos de Kavras, sempre buscando manter o equilíbrio do mundo e evitar os caminhos destrutivos da magia sem controle. Eles não interferem diretamente na política de todos os reinos, mas sua palavra pesa sempre que a estabilidade global está em risco por causa da magia.",
        "Apesar de todo o prestígio, é raro encontrar Byron sentado atrás de uma mesa. Ele prefere viajar anonimamente pelo mundo, observando pessoas, lugares e fenômenos com os próprios olhos. Acredita que o verdadeiro entendimento da magia precisa nascer do mundo vivo, e não só de pergaminhos e teorias. Como seu cargo não exige presença constante na Academia, ele confia a maior parte dos assuntos cotidianos a Jacob Fenwick, o Intendente da Academia.",
        "Jacob é um estudioso brilhante e amigo de longa data de Byron. É ele quem cuida da logística, dos registros e da coordenação do dia a dia com uma dedicação incansável, ainda que nem sempre de bom humor. É frequentemente visto correndo pelos corredores de mármore de Akamond, atolado em papelada e reuniões, enquanto Byron caminha por terras distantes, fazendo perguntas que poucos ousariam responder.",
        "Alguns dizem que o hábito de Byron de simplesmente desaparecer é irresponsável. Outros acham que é isso que o define: um mago guiado pela curiosidade, sabedoria e um desejo silencioso de entender o mundo um passo antes de todos os outros."
    ]
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
      history: [
        "Iris Dreyl",
        "Iris Dreyl, que já foi a professora mais carismática de Akamond, não dá mais aulas, mas continua como uma figura influente no Alto Conselho da Academia. Mesmo longe das salas de aula, sua presença no mundo arcano só aumentou.",
        "Como antiga instrutora de Magia Arcana, Iris era conhecida por seu domínio das ilusões e um estilo de ensino imprevisível. Suas aulas muitas vezes eram conduzidas por ilusões tão realistas que os alunos nem sabiam se ela estava mesmo ali. Muitos se aproximavam por sua beleza e carisma, mas ficavam pela mente afiada e pela precisão mágica que definiam suas lições. Fora da sala de aula, Iris teve um papel fundamental na proteção de Akamond. Dizem que os corredores tortuosos e as passagens que se movem na Academia foram moldados por sua magia, confundindo intrusos e guiando aliados. Suas ilusões diluíam as fronteiras entre estrutura e feitiçaria, transformando o campus em uma defesa viva.",
        "Iris segue como uma das figuras mais enigmáticas da história de Akamond. Há rumores de que ela vigia em segredo, usando outros nomes, cumprindo missões discretas para a Academia além de suas fronteiras flutuantes. Alguns acreditam que ela ainda lança feitiços sobre cidades distantes, observando em silêncio e deixando para trás apenas perguntas.",
        "O domínio de Iris Dreyl sobre ilusões, sua inteligência e sua habilidade de agir nas sombras garantem que seu legado continue vivo. Seja nas salas do Conselho ou nos sonhos daqueles que buscam respostas através da magia, sua presença nunca desaparece por completo."
      ]
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
      history: ["WIP"]
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
      history: [
        "Korz Durorag",
        "Korz Durorag foi o Chefe de Guerra dos Mok'tar, portador do Bloodthirsty e o Orc mais temido em Blackthorn Barrens. Sob seu estandarte, os Orcs prosperaram. Ele forjou força por meio da unidade e esculpiu uma era rara de prosperidade, liderando com disciplina e silêncio, em vez de uma sede cega por sangue.",
        "Criado à sombra das fornalhas por um pai ferreiro, Korz conquistou cada cicatriz nas arenas de terra antes de ascender ao poder pelo Ritual do Sangue Cinzento. Ele derrotou todos os desafiantes e ergueu o antigo machado Bloodthirsty do altar, os clãs se curvando diante de um líder que não podiam quebrar.",
        "Anos se passaram, e ninguém conseguiu superá-lo. Desafio após desafio terminou da mesma forma, com silêncio, e o Bloodthirsty banhado pela vitória.",
        "Mas a paz gera dúvida. Gruul Urmakh, o xamã mais velho, começou a sussurrar que Blackthorn Barrens . Korz havia se amolecido. Que seus acordos com forasteiros traíam o espírito Orc. Quando as palavras falharam em virar os clãs contra ele, Gruul recorreu a ferramentas antigas: veneno e ambição.",
        "Ele trouxe Karnul, um antigo desafiante outrora esmagado por Korz. Desta vez, Karnul voltou mudado. Seus olhos brilhavam com corrupção, seu corpo pulsava com uma força antinatural. Korz aceitou o desafio, mas a luta estava perdida antes mesmo de começar. Drogado secretamente pelos seguidores de Gruul, seu corpo enfraquecido, Korz lutou, mas caiu. Ainda assim, ele não morreu.",
        "Quando os tambores silenciaram e Karnul estendeu a mão para pegar o Bloodthirsty, o machado não respondeu. Permaneceu com Korz, vibrando em desafio. Na confusão, Korz escapou para as terras selvagens, o machado em punho, seu propósito intacto.",
        "Agora exilado, os clãs chamam Karnul de Chefe de Guerra. Mas muitos sussurram que é Gruul quem detém o verdadeiro poder, e que o machado o rejeitou.",
        "Korz caminha por Barrens, não como um guerreiro em busca de vingança, mas como um líder caído em busca de sentido no que restou. Ele não sabe o que o aguarda, apenas que seu caminho ainda não chegou ao fim."
      ]
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
      history: [
        "Ojore Adewale",
        "Entre os salões de pedra de Kalabari, nenhum discípulo ascendeu mais rápido do que Ojore Adewale. Treinado pela Bashuran Palm, perto da fronteira de Breathless Waste, ele dominou a arte de Ashu, moldando terra e pedra com precisão e fôlego. Aos vinte anos, já havia superado todos os monges de sua geração.",
        "Seu nome virou lenda depois que uma pequena aldeia desértica próxima à fronteira foi atacada por um bando de Gnols. A Guarda de Kalabari estava a dias de distância, sem qualquer esperança de defesa. Mas Ojore estava de passagem. Armado apenas com os punhos e com a terra sob seus pés, enfrentou sozinho mais de cinquenta atacantes. Muros se ergueram ao seu comando. O chão se partiu sob os invasores. Quando tudo terminou, a aldeia ainda estava de pé, e a notícia do seu feito se espalhou rapidamente por Ashara Sands. Desde aquele dia, passou a ser chamado de Guerreiro de Kalabari.",
        "Mas o poder trouxe visões. Em profunda meditação, Ojore começou a ver sinais de algo enterrado sob Kalabari, antigas fraturas despertando sob os alicerces do reino. Os anciãos da Bashuran rejeitaram seus alertas. Alguns o temiam. Outros o chamavam de arrogante.",
        "Recusando o silêncio, Ojore abandonou a ordem e desapareceu nas dunas. Para alguns, é um traidor. Para outros, um espírito da terra em forma mortal. Hoje, vagueia longe de Kalabari, buscando a origem das visões que inquietaram sua alma. Vive como nômade, treinando em ruínas esquecidas e guiando aqueles que cruzam seu caminho com força e propósito."
      ]
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
      history: ["WIP"]
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
      history: [
        "Orbryn Strongfoot",
        "Orbryn Strongfoot já foi um capitão no reino de Garmorli, conhecido por sua bravura, genialidade tática e compromisso inabalável com seu povo. Sua ascensão nas fileiras foi impulsionada por inúmeros sucessos, e ele era constantemente requisitado pelo próprio rei para missões importantes. Sua reputação se firmou graças a um histórico impecável de \"missões cumpridas\", onde sua mente estratégica, habilidades de pontaria e destemor lhe garantiram o respeito tanto dos colegas quanto da Corte Real.",
        "Ele também era conhecido por sua excentricidade e curiosidade insaciável. Ao contrário de seus parentes mais tradicionais, Orbryn sempre foi fascinado pelo peculiar e pelo inexplicável. Amigo íntimo de Bolgus Gearforge, os dois costumam colaborar em invenções estranhas e inovadoras que desafiam o artesanato anão convencional. Seja uma besta capaz de disparar projéteis alquímicos com precisão letal ou um jetpack movido a vapor, as criações de Orbryn são tão incomuns quanto eficazes na caçada.",
        "Além de sua inventividade, Orbryn é conhecido por sua paixão por caçar artefatos. No entanto, diferente de outros que buscam tesouros lendários, ele tem um faro especial para o estranho e o incomum: artefatos que a maioria descartaria como meras curiosidades. Sua coleção inclui engrenagens encantadas, armadilhas enferrujadas, panelas que se mexem sozinhas e outros itens bizarros que, segundo ele, guardam segredos ainda não explorados e que costuma usar para aprimorar suas já e impressionantes habilidades de caça.",
        "Certo dia, Orbryn foi enviado em uma missão para eliminar uma criatura que vinha perturbando os mineradores enquanto tentavam extrair recursos de uma caverna recém-descoberta, próxima às fronteiras congeladas de Winterhaven. Mas o que ele encontrou lá não era um monstro. Era uma garota, não mais velha que um filhote, tremendo ao lado do corpo de uma mulher Ymiren caída. O ar crepitava com magia, e a neve girava ao redor dela de forma antinatural. Aquilo não era uma fera. Era algo antigo. Algo apavorado.",
        "Orbryn enxergou a verdade antes de seus companheiros. Tentou explicar, cancelar a ordem de ataque, mas o medo se moveu mais rápido que a razão. Em um instante de lucidez, ele desviou a mira — não para a garota, mas para a parede de gelo atrás dela. A explosão lhe deu tempo suficiente para fugir. Orbryn conteve seu próprio esquadrão apenas o bastante para que o espírito desaparecesse nas terras selvagens.",
        "Daquele dia em diante, Orbryn deixou de ser um capitão celebrado. Tornou-se um traidor aos olhos de Garmorli, um nome sussurrado com desconfiança e vergonha. Mas ele nunca olhou para trás. Para ele, não havia honra em matar o que havia visto. Seja lá o que fosse aquela criatura, ela não pertencia a uma lista de recompensas anã.",
        "Suas aventuras agora o levam para longe dos túneis de sua terra natal, guiado por um novo tipo de propósito. O mundo está repleto de coisas que não se encaixam em rótulos simples. Orbryn Strongfoot está determinado a encontrá-las, protegê-las se for preciso, e desafiar todas as verdades que seu povo julgava absolutas."
      ]
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
      history: [
        "Reya Delacroix",
        "Reya Delacroix é a filha determinada da família Delacroix, Casa nobre famosa por o seu domínio sobre a magia de relâmpago. Criada com a expectativa de seguir os passos de seus ancestrais na Academia de Akamond, Reya logo mostrou talento natural. No entanto, seu espírito rebelde entrou em conflito com as exigências acadêmicas. Pouco interessada nos estudos formais, frequentemente matava aulas para treinar fisicamente ou praticar magia em situações reais. Sua personalidade provocadora e intolerância com desdém alheio causavam atritos constantes com professores e colegas.",
        "Durante os anos na Academia, Reya virou alvo de bullying devido às notas baixas, reflexo direto de seu desinteresse. Mas ela jamais abaixava a cabeça; respondia com firmeza, muitas vezes recorrendo a confrontos físicos. Sua determinação feroz e zero tolerância a desrespeito apenas reforçaram sua fama de encrenqueira.",
        "Sem o conhecimento da família, Reya vinha treinando com lanças desde pequena. Desenvolveu um estilo próprio de combate, fundindo velocidade e eletricidade em ataques fulminantes, tornando-se uma maga de batalha quase imparável. Após abandonar a Academia, abraçou de vez a arena do Coliseu, onde rapidamente ganhou fama como gladiadora. Com agilidade relampejante e presença marcante, ficou conhecida como \"Rainha Relâmpago\”, um título que se tornou sinônimo de sua coragem e poder.",
        "Seu pai Lucien Delacroix, ficou furioso com a decisão dela de participar dessas competições, vendo isso como um insulto à tradição da família. Ele acredita que Reya está manchando o nome Delacroix e despreza o caminho que ela escolheu. Mas, para Reya, o Coliseu é apenas um capítulo de sua vida, um em que ela prova sua força e independência, abrindo caminho para desafios ainda maiores que estão por vir."
      ]
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
      history: [
        "Thomas Sionn",
        "Thomas Sionn já foi apenas um pequeno gato aventureiro com amor pela música, nascido em terras distantes do reino de Derid. Apesar de seu talento excepcional para canto e os instrumentos, sua terra natal não valorizava seus dons. Movido pelo desejo de levar sua música a mais pessoas, ele partiu em uma jornada pelo continente, buscando um lugar onde fosse valorizado e respeitado.",
        "Após meses viajando e aprendendo a imbuir sua música com magia, Thomas chegou a uma cidade movimentada dentro do reino de Derid. Encantado pela mistura vibrante de culturas e oportunidades, não demorou para que suas apresentações em tavernas e estalagens o tornassem um dos bardos mais procurados da região. Sua música mágica podia curar, inspirar ou até intimidar, o que lhe rendeu fama como o maior bardo daquelas terras.",
        "Agora, vivendo em Kasteron, Thomas costuma se apresentar no Golden Lily, onde seu carisma e talento atraem tanto admiração quanto inveja. Sua tendência a flertar frequentemente o coloca em apuros, especialmente com nobres cujas damas, às vezes, ele seduz. Mesmo com as confusões amorosas, Thomas continua sendo querido, conhecido não só por sua arte, mas por seu espírito livre e personalidade cativante.",
        "Embora sua fama tenha se espalhado, Thomas permanece com os pés no chão, sempre disposto a compartilhar sua música e histórias com quem quiser ouvir. Ele segue viajando, sempre em busca de novos desafios e plateias e, vez ou outra, arrumando confusão no caminho. Para ele, a vida é uma melodia, e está determinado a tocá-la até a última nota."
      ]
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
      history: ["WIP"]
    },
    {
      id: 13,
      name: "Faendar",
      smallImg: "/faendar.png",
      bigImg: "/faendar_big.png",
      alt: "faendar",
      type: "support",
      description: "PLACEHOLDER",
      skills: [],
      history: [
        "Faendar Reyric",
        "Faendar Reyric era um membro respeitado da Ordem dos Druidas, estabelecida por Ereluna na fundação da nação élfica. Como druida herborista e mestre em magia da natureza, ele se dedicava à proteção e preservação dos recursos naturais e da biodiversidade de Ereluna.",
        "Com profundo conhecimento da terra e da flora local, Faendar buscava despertar todo o potencial de Calen Woods, transformando-a em uma barreira natural contra qualquer ameaça ao reino. Essa missão o consumia a tal ponto que, por vezes, negligenciava outras funções, como a coleta e cultivo de plantas e ervas medicinais.",
        "Apesar das críticas por parte da corte e de alguns cidadãos, os esforços de Faendar fortaleceram as defesas de Ereluna e consolidaram o reino como bastião da magia natural. Ele também era conhecido por seus ensinamentos e orientações, sendo Instrutor principal de jovens e anciãos da comunidade élfica.",
        "Faendar foi peça-chave na formação da nova geração de guerreiros élficos, sendo o principal mestre de Arryn e Irhaal, a quem ensinou respeito pela natureza e como usá-la como arma contra seus inimigos. Seus ensinamentos se tornaram um alicerce da cultura élfica, moldando a forma como os elfos enxergam e se relacionam com o mundo natural."

      ]
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
      history: [
        "Liam Redner",
        "Liam Redner era um jovem cavaleiro do reino de Solhaven, cuja capital, Solaran, venerava a honra e a cavalaria acima de tudo. Apesar de seu talento, Liam era subestimado, ofuscado pelos mais experientes. Tudo mudou aos dezessete anos, quando foi designado a um esquadrão encarregado de proteger uma vila do temido Dullahan, o espírito amaldiçoado de Braham que assolava a região a cada poucos anos.",
        "Durante anos, os cavaleiros de Solaran tentaram, em vão, conter os ataques do Dullahan, que deixava um rastro de morte e destruição por onde passava. Nenhum cavaleiro jamais conseguiu detê-lo, e todas as tentativas acabavam em tragédia. Mas naquela noite fatídica, quando o Dullahan apareceu, a coragem de Liam brilhou como nunca. Enquanto seus companheiros caíam um a um diante da força implacável do cavaleiro monstruoso, Liam lutou com tudo o que tinha, determinado a não deixar que o povo tivesse o mesmo destino. Em uma demonstração milagrosa de bravura e habilidade, ele conseguiu desviar os golpes do Dullahan, forçando-o a recuar pela primeira vez em toda a história registrada.",
        "Embora gravemente ferido, a resistência de Liam forçou Dullahan a recuar, salvando a vida de todos os aldeões, um feito que nenhum outro cavaleiro jamais havia alcançado. Suas ações rapidamente lhe renderam reconhecimento em todo o reino, e ele foi saudado como um herói. O jovem cavaleiro que enfrentou uma lenda tornou-se símbolo de esperança e coragem em Solhaven, provando que Dullahan não era invencível.",
        "Pelos dez anos seguintes, Liam se dedicou a um treinamento rigoroso, aperfeiçoando suas habilidades para o dia em que Braham retornasse. Movido pelo desejo de pôr fim ao reinado de terror de Dullahan e restaurar a honra dos cavaleiros de Solaran, Liam tornou-se obcecado com a ideia de confrontar o espírito amaldiçoado mais uma vez."
      ]
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
      history: [
        "Marly Argento",
        "Desde pequena, Marly Argento admirava o pai e sonhava em ajudar os necessitados, mesmo quando ainda era jovem demais para isso. Aos sete anos, Sariel, o Arcanjo da Restauração, encantou-se com a pureza e gentileza de seu coração, escolhendo-a como apóstola. A partir de então, foi canonizada pela Ordem de Asteed e, no ano seguinte, tornou-se uma Sacerdotisa Reverenciada. Criada dentro da Igreja, sua educação foi dedicada ao estudo dos pronunciamentos de Sariel.",
        "Com o tempo, sua fé amadureceu, e Marly passou a manifestar poderosas habilidades de cura, sendo capaz de tratar doenças e maldições que nem os Arcebispos conseguiam enfrentar. Isso só aumentou sua reverência entre o povo. Apesar da pressão das expectativas, Marly continua sendo uma jovem doce e inocente, sempre gentil, atenciosa e respeitosa com todos.",
        "Seus poderes têm sido fundamentais nas missões dos Paladinos de Asteed, inclusive nas lideradas por seu pai, o General Cassius Argento. Seja em batalhas contra inimigos poderosos ou em resgates de civis, as habilidades de Marly têm salvado vidas e garantido vitórias. Sua fé inabalável em Sariel e a pureza de seu coração fazem dela um farol de esperança, inspirando todos ao seu redor."
      ]
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
      history: [
        "Yuki",
        "Nas antigas e gélidas terras de Winterhaven, onde os ventos cortantes uivam por vastidões infinitas de neve e gelo, as lendas falam de uma era em que o equilíbrio foi quebrado. Os Ymirens, uma raça orgulhosa e poderosa, começaram a sucumbir a uma corrupção profunda, que distorceu seus corações e mergulhou o reino de lberon em uma era sombria. Em resposta, os espíritos da terra invocaram uma guardiã, um espírito de gelo nascido da própria essência de Winterhaven. Esse espírito, conhecido como Kiyomi, travou uma batalha feroz contra os Ymirens corrompidos. Sua fúria deixou cicatrizes na terra e, embora seus esforços tenham restaurado uma sombra de equilíbrio, ela passou a ser temida e reverenciada, com seu nome sussurrado com cautela.",
        "Gerações se passaram, e a história de Kiyomi se perdeu nas lendas. Mas Winterhaven permaneceu vigilante. Mais uma vez, a terra clamava por um guardião, e do coração das terras nevadas nasceu um novo espírito de raposa do gelo. Desta vez, ela era uma criatura pequena e frágil um símbolo de esperança, não de destruição. Seu nascimento passou despercebido por quase todos, exceto por uma única mulher Ymiren chamada Valaine, que a encontrou por acaso enquanto colhia ervas nas montanhas.",
        "Ciente das lendas antigas, Valaine temia o que fariam se descobrissem o pequeno espírito. Sabia que seu povo veria a raposa como uma ameaça, um presságio de desastre como Kiyomi. Impulsionada pelo instinto, ela fugiu para um pico isolado, longede lberon, e deu à criaturinha um nome: Yuki. Naquele refúgio silencioso, ela a criou como se fosse sua própria filha.",
        "Sob seus cuidados, Yuki cresceu. A magia selvagem que antes crepitava dentro dela começou a se acalmar, e ela aprendeu a moldar a neve com graça, não com fúria. As montanhas tornaram-se seu santuário, um lugar de calor e quietude em uma terra de (??). (Não tenho a continuação esse trecho final, caso tenha me manda no discord: eoyami)",
        "Mas a paz nunca é eterna. Um dia, uma expedição anã descobriu por acaso o esconderijo delas. Os ânimos se exaltaram e o conflito explodiu. Valaine foi abatida no caos, lutando até seu último fôlego para proteger Yuki.",
        "Entre os anões estava o Capitão Orbryn Strongfoot, um caçador veterano, conhecido por sua curiosidade e senso de justiça. Ao presenciar a verdade da situação e a inocência daquele jovem espírito, ele se voltou contra os seus e ajudou Yuki a escapar para as florestas geladas. Seu ato lhe deu a chance de sobreviver e desaparecer antes que os outros pudessem terminar o que haviam começado. Agora, considerado um traidor por parte de seu povo, Orbryn desapareceu das terras anãs sem intenção de se explicar.",
        "O que o futuro reserva para Yuki ainda está por ser escrito. Mas os anos em exílio, moldados por bondade, perda e um inesperado gesto de misericórdia, já começaram a forjar a alma de algo muito maior do que uma lenda renascida."
      ]
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
      history: [
        "Yura Nakajima",
        "Yura Nakajima foi a mais jovem a ser aceita na Hachibatsu no Mon, a elite de executores do Shogun de Ryukoku. Treinada desde a infância para se tornar a assassina perfeita, era mais afiada que suas lâminas, silenciosa como a neve caindo e leal sem hesitar. Diferente dos demais, Yura não carregava a essência da fera. Sua bênção viria mais tarde, adiada de propósito para garantir uma harmonia perfeita entre espírito e forma.",
        "Até lá, sua habilidade bastava. Sua velocidade, precisão e disciplina a colocavam entre monstros sem que precisasse se tornar um. Era um fantasma de seda, uma arma moldada apenas pela ordem.",
        "Mas tudo mudou durante uma missão nas províncias externas. Pega de surpresa em uma emboscada rebelde, Yura foi atingida por uma explosão desconhecida que devastou sua unidade. Gravemente ferida e dada como morta, foi encontrada e cuidada por camponeses na fronteira do império. Foi a primeira vez que ela recebeu um gesto de bondade.",
        "Essas pessoas deveriam temê-la, mas não temiam. Falavam com delicadeza. Davam-lhe comida. Riam de um jeito simples que ela nunca tinha conhecido. E, por meio delas, viu o outro lado de Ryukoku, aquele que fora treinada a ignorar. Opressão, silêncio, medo. O peso da lei do Shogun. Nunca antes questionara as ordens que seguia. Até então.",
        "Quando Ryukoku soube que ela havia sobrevivido, sabia que iriam caçá-la. Não apenas por ter fugido, mas pelo que os aldeões haviam feito. Para protegê-los, Yura desapareceu na calada da noite, fugindo para oeste em direção a deixando para trás tudo o que conhecia.",
        "Agora no exílio, sem mestre nem missão, Yura percorre as terras fronteiriças em silêncio. Esconde seu nome e suas lâminas, assombrada pelo que já fez e incerta sobre no que ainda acredita. Sua bênção bestial jamais foi concedida, mas algo diferente desperta, algo que é só dela. E nesse despertar silencioso, Yura busca um novo caminho, não escrito por ordens, mas moldado por escolhas."
      ]
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
      history: [
        "Zeugladius",
        "Toda organização tem suas estrelas, e os Paladinos de Asteed não são exceção. Nesse caso, o nome da estrela é Zeugladius. Alto, imponente e conhecido por seu martelo de duas mãos, Zeugladius foi literalmente criado pela Ordem. Muitos anos atrás, Rowena Greystone, já uma veterana respeitada, trouxe consigo um bebê enrolado em panos. Segundo ela, uma família viajava por uma estrada nas fronteiras quando foi atacada por um Grifo. Ela conseguiu salvar o bebê, mas chegou tarde demais para os pais. Com seu último suspiro, eles confiaram o menino a Rowena e pediram que o criasse. Sendo uma Paladina, ninguém questionou sua palavra, e o Rei Charles Alberral acatou seu pedido.",
        "Embora Rowena tenha sido sua mãe de criação, os demais Paladinos também ajudaram a criá-lo. Zeugladius era uma criança alegre e aplicada, aprendendo rapidamente os fundamentos de um Cavaleiro Sagrado e absorvendo os ensinamentos da Igreja. Mas cedo também surgiram os traços que o tornariam famoso: orgulho, impulsividade e, acima de tudo, imprudência. Ao atingir a idade certa, enfrentou as provações dos Paladinos e obteve os melhores resultados já registrados, o que alimentou ainda mais seu orgulho. Escolheu o martelo de duas mãos como arma, uma escolha incomum à época. Seus instrutores se preocuparam: tal arma sugeria que ele havia decidido abraçar sua natureza em vez de controlá-la. Ainda assim, ninguém se opôs. Um prodígio havia nascido.",
        "Por seus feitos excepcionais, Zeugladius foi escolhido por Mikael, o Arcanjo da Justiça, como seu apóstolo, o que lhe conferiu ainda mais poder. Isso elevou ainda mais sua reputação, e logo ele se tornou um dos Paladinos mais temidos. Apesar de popular entre as mulheres, foi o coração da Princesa Helena, filha do Rei Charles Alberral, que conquistou. O rei aprovou a união, e os dois agora estão noivos, um casamento celebrado em todo o reino. Hoje em dia, tavernas por todo o continente ecoam com canções sobre os feitos de Zeugladius. Desejado por umas e invejado por outros, ele se tornou símbolo de força, justiça e honra."
      ]
    },
  ];
  