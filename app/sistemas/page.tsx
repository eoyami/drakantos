import React from 'react'
import Image from 'next/image'
import mundoAberto from '../../public/mundo-aberto.png'
import mundoDrakantos from '../../public/mundo-drakantos.png'
import matchmaking from '../../public/matchmaking.png'
import Link from 'next/link'

const page = () => {
  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <div className="w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-fixed md:bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[10rem] mt-[2rem]">Sistemas</h1>
              </div>
              <div className="flex mt-4 text-white w-full gap-2">
              <div className='flex flex-col p-5 md:px-10 bg-black/65 w-full md:w-[80%] py-3'>
                <div className='paragrafo'>
                  <div id='sobre'>
                    <div className='title'>
                      <h3 className='text-2xl'>Drakantos é um MMORPG?</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                    <p>Vimos muitas pessoas perguntando se o jogo é um MMORPG ou um ARPG cooperativo. Em resumo, sim, é um MMORPG, mas definitivamente é diferente dos convencionais. Não seguimos a fórmula tradicional e criamos algo mais único. Estamos tentando combinar os melhores aspectos de um mundo aberto com o melhor dos dungeon crawlers. Abaixo, explicaremos em detalhes como isso vai funcionar.</p>
                  </div>
                </div>
                <div className='paragrafo'>
                  <div id='mundo-aberto'>
                    <div className='title'>
                      <h3 className='text-2xl'>Mundo Aberto</h3>
                      <hr />
                    </div>
                  </div>
                  <div className='text'>
                    <p>
                    No mundo aberto do jogo, você poderá encontrar todos os outros jogadores do seu servidor, assim como em qualquer MMORPG. Esta parte será mais focada em:
                    </p>
                    <div className='my-2'>
                      <ul>
                        <li>Exploração do mundo;</li>
                      <li>Enfrentamento de inimigos;</li>
                      <li>Encontrar baús e segredos;</li>
                      <li>Resolver quebra-cabeças;</li>
                      <li>Coleta de recursos;</li>
                      <li>Procurar mascotes;</li>
                      <li>Progressão da história;</li>
                      <li>Missões secundárias;</li>
                      <li>E mais!</li>
                      </ul>
                    </div>
                    <p>Além disso, temos o clássico mercado onde você pode comprar e vender itens para outros jogadores, bem como muitos minigames e outras atividades para fazer nas cidades e áreas que você explorou e desbloqueou.</p>

                    <h4>Inicio:</h4>
                    <p>No começo do jogo, cada personagem terá seu próprio prólogo, mostrando um pouco sobre sua história, personalidade e como eles se envolvem na história principal (os vilões terão uma parte separada, mas explicaremos isso em outro momento). Isso significa que o início da sua jornada será único, dependendo do personagem que você escolher. Eventualmente, os jogadores chegarão a Fairdale, a vila "inicial" no mundo aberto. Projetamos isso dessa forma para facilitar a conexão entre amigos e evitar o problema de começar em regiões diferentes.</p>

                    <h4>Quests:</h4>
                    <p>Depois de experimentar outros MMORPGs, concluímos que não gostamos mais de fazer missões lineares de "interagir aqui e ali", muitas vezes obrigatórias para subir de nível. Por isso, em Drakantos, as missões terão um propósito real e as recompensas não serão apenas ouro e experiência. Elas incluirão desbloqueio de sistemas, lojas, artefatos, ferramentas de exploração (como um gancho de escalada para acessar novos locais) e assim por diante.</p>
                    <p>Também teremos muitas missões secundárias e histórias específicas para certos personagens. Por exemplo, uma certa missão pode exigir conhecimento de Magia, então apenas personagens da categoria mago poderão completá-la.</p>
                    <p>É importante notar que essas missões oferecem progressão horizontal, ou seja, completar uma missão com um personagem contará para toda a sua conta.</p>
                    <div className='flex flex-col justify-center items-center w-full h-[auto] relative imagem'>
                      <Image src={mundoAberto.src} width={1280} height={720} alt='Mundo Aberto'/>
                      <p>Reprodução: Gameplay</p>
                    </div>
                  </div>
                </div>

                <div className='paragrafo'>
                  <div id='experiencia'>
                    <div className='title'>
                      <h3 className='text-2xl'>Experiência</h3>
                      <hr />
                    </div>
                  </div>
                  <div className='text'>
                    <p>Você também irá ganhar XP ao enfrentar inimigos no mundo aberto, mas como mencionamos, essa parte será muito mais focada na exploração e nas missões, em vez de 'farmar' ou 'subir de nível'. Para isso, teremos a Guilda dos Aventureiros.</p>
                  </div>
                </div>

                <div className='paragrafo'>
                  <div id='aventureiros'>
                    <div className='title'>
                      <h3 className='text-2xl'> Guilda dos Aventureiros</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                      <p>Este sistema será a parte mais 'Dungeon Crawler' do jogo que mencionamos.</p>
                      <p>Todas as principais cidades e vilas terão uma Guilda dos Aventureiros. Nesses locais, você poderá acessar o mapa mundi do jogo, com várias missões disponíveis para escolher. Essas missões mudam periodicamente, alterando tanto os mapas quanto seus objetivos principais.</p>
                      <p>Atualmente, temos 120 mapas diferentes, com vários biomas, e eles funcionarão como masmorras. Todos eles foram feitos à mão, sem geração procedural, porque acreditamos que isso pode fazer com que os mapas pareçam genéricos, e queremos que tenham um toque mais único.</p>
                      <h4>Objetivos Principais</h4>
                      <p>
                        Os objetivos principais vão variar de uma simples tarefa, como matar todos os inimigos da missão, coletar itens específicos, escoltar mercadores, resgatar aldeões sequestrados, encontrar um chefe foragido, até defender vilas de invasores ou interromper conflitos entre outras facções. Por exemplo, você pode ter uma missão para matar um Líder Orc em um mapa de elfos porque eles estão em um conflito em andamento, e você pode acabar se envolvendo em uma batalha entre as duas facções para encontrar seu alvo. Isso significa que, mesmo que um mapa familiar seja selecionado, o objetivo pode variar bastante, tornando-o diferente a cada vez.
                      </p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full h-[auto] relative imagem'>
                      <Image src={mundoDrakantos.src} width={1280} height={720} alt='Guilda dos Aventureiros'/>
                      <p>Reprodução: Gameplay</p>
                    </div>
                </div>

                <div className='paragrafo'>
                  <div id='objetivos'>
                    <div className='title'>
                      <h3 className='text-2xl'>Objetivos Secundários e Eventos Especiais</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                    <p>Além dos objetivos principais de cada missão, também pode aparecer vários objetivos secundários aleatórios. Aqui vai alguns exemplos:</p>
                    <p>Você está escoltando um mercador à noite quando, de repente, é emboscado por um grupo de esqueletos.
                    Você entra em uma caverna e se depara com um ritual de cultistas.
                    Você está coletando um item na floresta e encontra animais selvagens sendo devorados por um Grifo, que então começa a atacá-lo.</p>
                    <p>E também podem ocorrer eventos especiais. Exemplos:</p>
                    <ul>
                      <li>
                        <p>Nil'Varix, o palhaço demoníaco, aparece e propõe um desafio. Imagine que você já completou a missão, mas será que consegue terminá-la com uma mão gigante tentando esmagá-lo? Ou trocando de lugar com outros jogadores? Ou com uma lupa gigante onde você não pode se mover enquanto está sendo observado.</p>
                      </li>

                      <li>
                        <p>Um gnomo dourado aparece, e você precisa derrotá-lo antes que ele escape.
                    Um mercenário pode lhe oferecer uma proposta para atacar outros jogadores durante uma missão, levando seu grupo a invadir as missões de outros jogadores com o objetivo de eliminá-los, e vice-versa.</p>
                      </li>
                    </ul>
                    <p>Se você optar por completar essas missões secundárias, sua recompensa no final incluirá um bônus específico para cada evento especial concluído.</p>

                    <p>Todas essas situações tornarão a experiência do jogador muito mais divertida e variada, reduzindo a repetitividade, o jogo ficará mais dinâmico.</p>
                  </div>
                </div>


                <div className='paragrafo'>
                  <div id='dificuldade'>
                    <div className='title'>
                      <h3 className='text-2xl'>Classificação e Dificuldade</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                  <p>
                    Essas missões aparecerão com base no seu Rank na Guilda. Esse Rank está vinculado ao seu “Poder”, que é essencialmente a sua força com equipamentos (um “nível de item” geral). À medida que você aumenta seu poder, poderá subir seu Rank. Cada dificuldade possui requisitos mínimos para ser concluído.
                  </p>
                  <p>
                    Isso significa que você pode ajustar a dificuldade de acordo com sua preferência. Se você gosta de desafios e quer se testar, pode avançar no rank com os requisitos mínimos e tentar missões mais difíceis, acelerando seu progresso. No entanto, se preferir uma dificuldade mais fácil, pode permanecer no seu rank atual por mais tempo ou até fazer missões de ranks inferiores. Assim, você pode avançar no seu próprio ritmo ou até ajudar amigos que estão em diferentes ranks.
                  </p>
                  <p>
                    A melhor parte é que essa configuração facilita a introdução de novos conteúdos no futuro. Por exemplo, se um rank tiver uma variedade limitada de inimigos ou missões, podemos introduzir mais conteúdo, e isso multiplicará as possibilidades uma vez integrado ao sistema, enriquecendo toda a experiência.
                    </p>
                  </div>
                </div>

                <div className='paragrafo'>
                  <div id='matchmaking'>
                    <div className='title'>
                      <h3 className='text-2xl'>Matchmaking</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                  <p>
                    Para evitar filas e longos tempos de espera no futuro, quando você escolhe uma missão, ela começará automaticamente após alguns segundos. Se outros jogadores também estiverem tentando fazer a mesma missão, você se juntará a eles. Caso contrário, você irá sozinho ou com quantas pessoas também estiverem procurando.
                  </p>
                  <p>A fila padrão é para 3 jogadores, mas a missão começará independentemente de encontrar outros jogadores. Nesse caso, jogadores podem se juntar a você até alguns minutos após o início da missão, entrando como reforços (ou você pode se juntar à missão de outra pessoa que já tenha começado).</p>
                  {/* <p>Detalhe, caso você tenha um grupo de 4 amigos (máximo de vagas disponível em um grupo), você ainda poderá fazer as missões com 4 pessoas.</p> */}
                  <p>
                    A dificuldade dos inimigos escala com o número de jogadores para manter níveis de desafio consistentes. Essa escalabilidade também ajusta se jogadores saírem ou desconectarem durante a missão.
                  </p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full h-[auto] relative imagem'>
                      <Image src={matchmaking.src} width={1280} height={720} alt='Matchmaking'/>
                      <p>Reprodução: Gameplay</p>
                    </div>
                </div>


                <div className='paragrafo'>
                  <div id='builds'>
                    <div className='title'>
                      <h3 className='text-2xl'>É possível personalizar a build com equipamentos ou talentos?</h3>
                      <hr />
                    </div>
                  </div>
                  <div className='text'>
                    <p>Sim, você poderá personalizar sua build, mas não com equipamentos tradicionais e árvores de talento. Cada herói tem suas próprias habilidades que você desbloqueia conforme sobe de level, mas diferente da maioria dos jogos, em que as builds seguem esses sistemas já conhecidos, no Drakantos escolhemos um caminho diferente, que acreditamos ser mais interessante e adequado ao design do jogo.</p>
                    <p>No lugar disso, usamos três sistemas principais: Orbes, Artefatos e Troféus.</p>

                    <ul>
                      <li>
                        <h4>Orbes:</h4>
                        <p>
                          São itens raros que modificam o funcionamento das suas habilidades. Alguns adicionam pequenos aprimoramentos ou efeitos extras, enquanto outros modificam a habilidade para algo totalmente novo.
                          </p>
                        <p>Eles cumprem um papel parecido com o de uma árvore de talentos, mas como são itens, trazem mais objetivo para o endgame e incentivam a experimentação. Você pode montar estilos de jogo diferentes com base nos orbes que encontrar. E como podemos adicionar novos orbes a cada atualização, até heróis antigos podem ganhar builds e mecânicas novas com o tempo.</p>
                        <p>Depois de desbloqueados, os orbes podem ser trocados facilmente e salvos em pré-sets, permitindo ajustar sua build de acordo com o boss ou conteúdo que estiver enfrentando.
                        </p>
                      </li>
                      <li>
                        <h4>Artefatos:</h4>
                        <p>São itens raros que desbloqueiam novas habilidades ativas. Uma vez desbloqueados, podem ser usados por praticamente qualquer herói da sua conta.</p>
                        <p>
                          Atualmente já existem mais de 180 artefatos disponíveis, abrindo infinitas possibilidades de builds. Cada herói tem dois espaços extras para essas habilidades, então você pode adaptar seu estilo de jogo como preferir. Você pode usar artefatos mais defensivos para builds mais resistentes ou optar por opções de velocidade e teleporte para maior mobilidade.É possível cobrir fraquezas ou montar conjuntos específicos para certos tipos de conteúdo. Estamos criando uma grande variedade de artefatos, desde os comuns obtidos em missões básicas até os exclusivos deixados por bosses.
                        </p>
                      </li>
                      <li>
                        <h4>Troféus:</h4>
                        <p>São itens raros que desbloqueiam efeitos passivos. Assim como os artefatos, uma vez desbloqueados, podem ser usados por praticamente qualquer herói da sua conta.</p>
                        <p>Você pode equipar dois troféus por vez, e eles oferecem bônus passivos poderosos que ampliam o impacto do seu gameplay, estendem combos ou mudam bastante o papel do seu herói em combate.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='paragrafo'>
                  <div id='aparencia'>
                    <div className='title'>
                      <h3 className='text-2xl'>Posso personalizar a aparência do meu herói?</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                    <p>Sim! Você poderá desbloquear novos cosméticos, penteados, chapéus, peças de roupa e até visuais completos. Além disso, cada parte da aparência do seu herói pode ser recolorida usando tintas.
                    </p>
                    <h4 className='text-xl'>Tintas</h4>
                    <hr />
                    <p>São itens negociáveis que você pode obter jogando. Elas terão valor mesmo para jogadores que não ligam para cosméticos por conta do seu forte valor de mercado. No entanto, não serão fáceis de conseguir. Assim como em muitos MMORPGs, a personalização em Drakantos faz parte da progressão a longo prazo e pode ser algo que você queira ir atrás para conquistar.</p>
                  </div>
                </div>


                <div className='paragrafo'>
                  <div id='classes'>
                    <div className='title'>
                      <h3 className='text-2xl'>Preciso jogar com apenas uma classe ou posso usar várias?</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                    <p>Se você preferir jogar com apenas um, você pode. Mas o jogo foi feito para quem gosta de alternar entre diferentes heróis Pense nisso como algo parecido com League of Legends, Overwatch ou Brawl Stars.</p>
                    <p>No Drakantos não é preciso criar um novo personagem para experimentar outra classe. Cada classe é um herói, com habilidades próprias, personalidade e história. Todos os heróis podem ser desbloqueados na sua conta, e você pode trocar entre eles livremente, sempre que quiser.</p>
                    <p>O nível e os equipamentos não são compartilhados entre os heróis, mas existe bastante progressão cruzada. Artefatos (que liberam habilidades ativas) e troféus (que oferecem efeitos passivos), junto com seus aprimoramentos, valem para todos os heróis da conta. Cosméticos como mascotes, montarias e itens de exibição também são compartilhados.</p>
                    <p>O mais importante é que, quando você atinge certo nível e poder, os acessórios de endgame passam a ser compartilhados entre todos os seus heróis. Isso significa que você ainda precisará evoluir e equipar cada herói individualmente, mas não será necessário farmar o equipamento endgame para cada um deles. Quando um dos seus heróis alcança esse ponto, os outros também podem acessar esse mesmo conteúdo de endgame, facilitando muito a exploração e o uso de diferentes heróis sem ficar para trás. Isso abre um mundo de possibilidades: você pode levar o herói mais adequado para determinados bosses, mapas ou modos PvP, com builds pré-definidas e tudo compartilhando a progressão.</p>
                  </div>
                </div>

                <div className='paragrafo'>
                  <div id='pvp'>
                    <div className='title'>
                      <h3 className='text-2xl'>PvP</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                    <p>Apesar da equipe de desenvolvimento gostar muito de PvP, Drakantos não é um jogo focado em combate PvP em mundo aberto. Por causa do estilo de ação e das mecânicas de combate, o PvP funciona muito melhor em lutas menores e mais táticas. As lutas exigem habilidade e reflexos rápidos para conseguir desviar ou bloquear as habilidades no momento certo.</p>
                    <p>O principal modo PvP será um sistema ranqueado de batalhas 3v3, parecido com o que vemos em jogos como Brawl Stars ou MOBAs. As partidas acontecem em mapas variados com objetivos que mudam ao longo do dia e até de uma temporada para outra. Isso traz mais variedade e impacto nas escolhas de heróis e builds, permitindo estratégias e formações de time bem diferentes. Os stats dos equipamentos serão equalizados para garantir mais competitividade, fazendo com que a vitória dependa mais da habilidade e da estratégia do que dos números em si.</p>
                    <p>Também pode ter PvP durante missões da Guilda dos Aventureiros, através de um sistema de invasão, em que outros jogadores podem aparecer no meio da missão. Essas invasões rendem ótimas recompensas e criam confrontos inesperados e intensos.</p>
                    <p>No mundo aberto, você pode encontrar baús aleatórios que ativam eventos PvP "todos contra todos". O último jogador de pé leva o loot, trazendo mais emoção e tensão durante a exploração.</p>
                    <p>Outro modo PvP será no Hellgates, mas ainda está em estágio inicial e será revelado mais pra frente.
Outros modos podem ser adicionados no futuro. Eles não são difíceis de implementar, então o feedback da comunidade vai ser essencial para melhorarmos a experiência e decidirmos os próximos passos.</p>
                  </div>
                </div>
                {/* FIM DO CONTEÚDO */}
              </div>
              <div className='relative flex indice'>
                <div className='hidden md:flex flex-col h-max bg-[#242424]/50 p-3 fixed w-full'>
                    <h3 className='text-2xl'>Índice</h3>
                    <hr className='mb-2' />
                  <ul>
                    <li><Link href={'#sobre'} className='hover:text-gray-500'>O que é?</Link></li>
                    <li><Link href={'#mundo-aberto'} className='hover:text-gray-500'>Mundo Aberto</Link></li>
                    <li><Link href={'#experiencia'} className='hover:text-gray-500'>Experiência</Link></li>
                    <li><Link href={'#aventureiros'} className='hover:text-gray-500'>Guilda dos Aventureiros</Link></li>
                    <li><Link href={'#objetivos'} className='hover:text-gray-500'>Objetivos</Link></li>
                    <li><Link href={'#dificuldade'} className='hover:text-gray-500'>Dificuldade</Link></li>
                    <li><Link href={'#matchmaking'} className='hover:text-gray-500'>Matchmaking</Link></li>
                    <li><Link href={'#builds'} className='hover:text-gray-500'>Builds</Link></li>
                    <li><Link href={'#aparencia'} className='hover:text-gray-500'>Aparência</Link></li>
                    <li><Link href={'#classes'} className='hover:text-gray-500'>Classes</Link></li>
                    <li><Link href={'#pvp'} className='hover:text-gray-500'>PvP</Link></li>
                  </ul>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default page