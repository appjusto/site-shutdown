import Link from "next/link";

export default function Pronouncement() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-4 lg:mb-6">Encerramento das operações do AppJusto</h1>
      <p>
        É com muito pesar que informamos o encerramento das operações do
        AppJusto.
      </p>
      <p>
        Nossa história começou em 2020, compartilhando a revolta de
        entregadores/as e donos/as de restaurantes que, para continuar
        trabalhando na pandemia, precisaram se submeter às péssimas condições
        impostas pelo monopólio do mercado de delivery por plataforma.
      </p>
      <p>
        A partir dessa insatisfação, desenhamos um modelo de negócio social
        enxuto, cobrando uma taxa justa dos restaurantes, que assim puderam
        praticar preços menores e incentivar seus consumidores a usarem nossa
        plataforma. Quem pedia valorizava o trabalho de quem entregava e ainda
        pagava menos no pedido. Ou seja, bom para todos.
      </p>
      <p>
        Além da justiça financeira, entendíamos que era preciso estabelecer
        relações que realmente respeitassem a autonomia de quem entrega.
        Trabalhadores que não podem definir o valor do seu trabalho e que são
        punidos se recusarem ofertas de serviços{" "}
        <strong>não são autônomos de verdade</strong>. Por isso, nossa
        plataforma permitiu, desde o lançamento, que entregadores/as se
        juntassem e definissem o valor do próprio trabalho – e não foi
        implementado nenhum tipo de gestão algorítmica que pudesse diminuir a
        autonomia de quem trabalhava pela plataforma.{" "}
        <strong>
          (Leia nossa proposta de regulamentação{" "}
          <Link href="/cadastro" className="underline">
            neste link
          </Link>
          )
        </strong>
        .
      </p>
      <p>
        Temos muito do que nos orgulhar. Com menos de dois anos de operação,{" "}
        <Link
          href="https://fair.work/wp-content/uploads/sites/17/2023/07/Fairwork-Brazil-Ratings-2023-report-PT-red.pdf"
          target="_blank"
          className="underline"
        >
          o AppJusto foi considerada a plataforma que mais fez pelo trabalho
          decente no Brasil
        </Link>
        . Nosso financiamento coletivo atraiu XXX investidores – um recorde em
        número de participantes de equity crowdfunding no Brasil. O código-fonte
        livre da plataforma foi estudado por alunos/as em faculdades do país.
      </p>
      <p>
        Ficamos especialmente orgulhosos das XX mil entregas realizadas, que
        geraram ganhos XX% maiores para entregadores e uma economia de R$ XX em
        taxas para restaurantes, contribuindo com os ODS 8 (trabalho digno e
        crescimento econômico) e 10 (reduzir as desigualdades).
      </p>
      <p>
        Ainda assim, todos os nossos esforços não foram suficientes para que o
        AppJusto conseguisse alcançar viabilidade financeira, e é por isso que
        estamos encerrando as operações e planejando os próximos passos.{" "}
        <strong>
          Se você fizer parte de alguma organização que acredita no impacto e na
          viabilidade do projeto, queremos falar com você
        </strong>
        .
      </p>
      <p>
        Nosso enorme agradecimento a anjos/as, investidores/as, voluntários/as,
        parceiros/as, a equipe maravilhosa que passou pela empresa, os
        restaurantes e entregadores/as que usaram a plataforma e a todos/as
        aqueles/as que fizeram pedidos.
      </p>
      <p>
        Seguimos acreditando na importância de combater o monopólio e usar a
        tecnologia para criar negócios sociais justos.
      </p>
    </div>
  );
}
