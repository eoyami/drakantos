import React from 'react'
import Image from 'next/image'
import mundoAberto from '../../public/mundo-aberto.png'
import mundoDrakantos from '../../public/mundo-drakantos.png'
import Link from 'next/link'
Link

const page = () => {
  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen relative" >
            <div className="absolute top-0 w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-no-repeat sm:bg-fixed">
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