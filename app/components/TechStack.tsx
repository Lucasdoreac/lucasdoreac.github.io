export default function TechStack() {
  return (
    <section id="techstack" className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">🛠️ Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">
            <i className="fas fa-laptop-code text-blue-600 mr-2"></i> 
            Desenvolvimento Web
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Frontend</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Backend</span>
          </div>
          <h4 className="font-semibold mb-2">Linguagens e Frameworks:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>HTML5, CSS3</li>
            <li>React, Next.js</li>
            <li>Node.js, Express</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">
            <i className="fas fa-brain text-purple-600 mr-2"></i> 
            Inteligência Artificial
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">IA</span>
          </div>
          <h4 className="font-semibold mb-2">Ferramentas e Plataformas:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Python para IA</li>
            <li>Anthropic Claude</li>
            <li>ChatGPT (OpenAI)</li>
            <li>MCP (Meta AI)</li>
            <li>Midjourney</li>
            <li>Sora (OpenAI)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">
            <i className="fas fa-code text-green-600 mr-2"></i> 
            Ambiente & Ferramentas
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">DevOps</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Ambiente</span>
          </div>
          <h4 className="font-semibold mb-2">Tecnologias:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>macOS (Ambiente Principal)</li>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Docker</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
}