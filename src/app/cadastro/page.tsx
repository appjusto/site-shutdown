import Link from "next/link";

export default function Cadastro() {
  return (
    <>
      <main className="pt-24 lg:pt-48 flex min-h-screen flex-col">
        <div className="max-w-[922px] container flex flex-col gap-10 lg:gap-16 pb-16 lg:pb-24">
          <div className="flex flex-col gap-4">
            <h1 className="mb-4 lg:mb-6">
              Cadastro unificado: nossa proposta para regulamentação do trabalho
              por plataforma
            </h1>
            <p>
              Um tema que sempre foi central para o AppJusto e que tem sido
              pouco discutido nos debates que tratam da regulamentação do
              trabalho por plataforma é a <strong>autonomia</strong>.
            </p>
            <p>
              Fora das plataformas, a contratação de um serviço prestado por um
              autônomo – como uma eletricista ou uma faxineira – é negociada
              entre o cliente e o prestador do serviço. Se concordarem com
              escopo, prazo e valor, o serviço é contratado; caso contrário, não
              há repercussão negativa para nenhuma das partes.
            </p>
            <p>
              O surgimento de plataformas para intermediar contratações como
              essas trouxe boas promessas: prestadores seriam encontrados mais
              facilmente e receberiam mais serviços; clientes teriam mais opções
              e mais segurança na execução do serviço.{" "}
            </p>
            <p>
              Com o surgimento do Uber e a popularização da prestação de serviço
              em tempo real, um novo modelo surgiu:{" "}
              <strong>
                agora são os algoritmos que definem o preço do serviço e o
                repasse ao prestador
              </strong>{" "}
              e criam mecanismos (scoring/rating) para{" "}
              <strong>
                coagir os prestadores a aceitarem ofertas desvantajosas
              </strong>{" "}
              – ou sofrer punições. Além disso, este modelo também inviabiliza o
              relacionamento direto entre prestador de serviço e cliente para
              estabelecer futuras negociações.
            </p>
            <p>
              Apesar de mantida a flexibilidade para escolher os horários de
              trabalho, é difícil aceitar que quem é gerido por algoritmos, não
              define o valor do próprio trabalho e não pode estabelecer
              relacionamento direto com seus clientes seja considerado um
              trabalhador autônomo.
            </p>
            <p>
              <strong>
                O que justifica que não tenham as mesmas condições das pessoas
                que não trabalham por plataformas?
              </strong>
            </p>
            <p>
              Reconhecendo a complexidade e relevância desse debate, nossa
              proposta sugere um primeiro passo para garantir a autonomia dos
              trabalhadores por plataforma e a transparência na relação entre
              prestadores de serviço e empresas.
            </p>
            <h2>Cadastro unificado de trabalhadores por plataforma</h2>
            <p>
              Nossa proposta é a criação de um cadastro de trabalhadores/as por
              plataforma, ao qual as empresas deverão obrigatoriamente estar
              integradas para operar. Na prática, isso significa que as
              plataformas terão que:
            </p>
            <ol className="list-decimal ml-16">
              <li>
                repassar serviços apenas às pessoas que estiverem ativas no
                cadastro;
              </li>
              <li>
                respeitar as condições de participação definidas pelos pessoas e
                pelas cidades;
              </li>
              <li>
                fornecer informações sobre as contratações para as cidades;
              </li>
              <li>
                respeitar os processos de suspensão e bloqueio do cadastro.
              </li>
            </ol>
            <p>
              Nesse modelo,{" "}
              <strong>
                a pessoa é a dona do seu cadastro e não a plataforma
              </strong>
              , diminuindo sua dependência de uma ou outra empresa. Ela poderia
              definir condições de participação, como o{" "}
              <strong>valor mínimo</strong>, e participar de coletivos com
              outras pessoas,{" "}
              <strong>viabilizando o cooperativismo de plataforma</strong>. As
              punições seriam supervisionadas pelo cadastro, evitando bloqueios
              sem defesa e outros abusos que são relatados recorrentemente pelos
              trabalhadores, configurando situações de desgaste físico e
              emocional.
            </p>
            <p>
              <strong>As prefeituras finalmente teriam acesso aos dados</strong>{" "}
              sobre serviços prestados e{" "}
              <strong>poderiam adaptar as cidades</strong> para essa nova
              realidade como, por exemplo, criar infraestruturas públicas para
              descanso, alimentação etc. Poderiam definir parâmetros como{" "}
              <strong>valor mínimo e jornada máxima</strong>, realizar
              treinamentos, garantir que as pessoas estejam com sua MEI em dia e
              usando equipamentos de segurança. Além de, claro, garantir que
              todos os impostos sejam recolhidos corretamente.
            </p>
            <p>
              Finalmente, sem a fricção de realizar um novo cadastro para cada
              plataforma, as pessoas seriam incentivadas a manter seu cadastro
              ativo em várias, o que seria{" "}
              <strong>fundamental para ampliar a concorrência</strong>. Traria
              também um enorme <strong>ganho operacional</strong>, tanto por
              pular o processo de cadastro quanto por evitar o trabalho
              simultâneo e desincentivar fraudes.
            </p>
            <p>
              Com a suspensão das operações do AppJusto, ficam a experiência e
              os debates acumulados, que reuniram entregadores, pesquisadores e
              gestores. Seguimos mobilizados e{" "}
              <Link href="mailto:contato@appjusto.com.br" className="underline">
                à disposição para colaborar
              </Link>{" "}
              com pessoas e entidades interessadas em viabilizar propostas nesse
              sentido: por trabalho justo e efetivamente autônomo.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
