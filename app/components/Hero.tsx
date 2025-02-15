export default function Hero() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Olá! 👋 Eu sou Lucas Dórea Cardoso</h1>
        <p className="text-xl mb-2">Desenvolvedor de Software & Especialista em Soluções Sustentáveis</p>
        <p className="text-xl mb-8">Estudante de Ciência da Computação | Apaixonado por Tecnologia e Sustentabilidade</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="https://linkedin.com/in/lucas-dórea-cardoso-771833112" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a 
            href="https://github.com/Lucasdoreac" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
        </div>
      </div>
      <article className="max-w-3xl mx-auto text-left bg-white/10 p-8 rounded-lg">
        <p className="mb-6">
          👋 Seja muito bem-vindo ao meu portfólio online! Sou Lucas Dórea Cardoso, 
          estudante de Ciência da Computação no UDF Centro Universitário, em Brasília/DF. 
          Além da minha jornada acadêmica, possuo experiência como Especialista em Gestão Ambiental, 
          buscando sempre integrar a tecnologia com práticas sustentáveis.
        </p>
        <p className="mb-6">
          💻 Atualmente, atuo como Desenvolvedor Full Stack, com foco em criar soluções 
          inovadoras e eficientes. Sou um entusiasta do ecossistema Apple, utilizando macOS 
          como meu ambiente principal de desenvolvimento. A Inteligência Artificial é uma área 
          que me fascina e que busco integrar em meus projetos para otimizar processos e gerar valor.
        </p>
        <p>
          🚀 Explore meu portfólio para conhecer mais sobre minhas habilidades, projetos 
          e minha trajetória no mundo da tecnologia e sustentabilidade.
        </p>
      </article>
    </section>
  );
}