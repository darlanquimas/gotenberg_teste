import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

// Configure o arquivo como variável global na inicialização
const htmlFile = open('./index.html');

// Configuração do teste
export const options = {
  stages: [
    { duration: '30s', target: 10 }, // Ramp-up para 10 usuários em 30s
    { duration: '1m', target: 10 },  // Sustentar 10 usuários por 1 minuto
    { duration: '30s', target: 0 },  // Ramp-down para 0 usuários
  ],
};

// Teste principal
export default function () {
  const res = http.post('http://localhost:3000/convert/html', {
    files: http.file(htmlFile, 'index.html'), // Usa o arquivo carregado na inicialização
  });

  // Verificar resposta
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // sleep(1); // Aguarda 1 segundo entre as iterações
}
