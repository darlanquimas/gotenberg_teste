# Gotenberg Load Test Project

Este repositório contém um projeto de teste de carga utilizando **Gotenberg** para conversão de documentos, **k6** para execução de testes de carga e **Docker Compose** para orquestração dos serviços.

## Estrutura do Projeto

- `index.html`: Arquivo HTML simples para ser convertido em PDF pelo Gotenberg.
- `load-test.js`: Script de teste de carga usando o **k6**, que realiza requisições POST para o Gotenberg para conversão de HTML em PDF.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose para executar os serviços de Gotenberg.

## Requisitos

### Dependências:
1. **Docker**: Para rodar os serviços (Gotenberg, NATS e outros, se necessário).
2. **Docker Compose**: Para orquestrar os contêineres Docker.
3. **k6**: Para realizar os testes de carga (não necessário se apenas rodar o Gotenberg).

## Como executar no Linux

### 1. Instalar Docker e Docker Compose

Se você ainda não tem o Docker e o Docker Compose instalados, execute os seguintes comandos:

#### Docker
```bash
# Atualize os pacotes
sudo apt update
# Instale as dependências
sudo apt install apt-transport-https ca-certificates curl software-properties-common
# Adicione o repositório Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
# Instale o Docker
sudo apt install docker-ce docker-ce-cli containerd.io
```

#### Docker Compose
```bash
# Baixe o Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# Dê permissão de execução
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Executar o Projeto

1. Clone o repositório ou baixe os arquivos.
2. Navegue até o diretório do projeto.
   
   ```bash
   cd /caminho/para/o/projeto/gotenbergteste
   ```

3. Suba os containers com Docker Compose:

   ```bash
   docker-compose up -d
   ```

4. O Gotenberg estará disponível em `http://localhost:3000`.

5. Para rodar o teste de carga com **k6**, execute o comando:

   ```bash
   k6 run load-test.js
   ```

6. Os resultados do teste de carga serão exibidos no terminal.

### 3. Parar os Containers

Quando terminar, você pode parar os containers com o comando:

```bash
docker-compose down
```

## Como executar no Windows

### 1. Instalar Docker Desktop

Se você ainda não tem o Docker Desktop instalado, siga as instruções [aqui](https://www.docker.com/products/docker-desktop) para instalação no Windows.

### 2. Executar o Projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o terminal do Docker Desktop ou o PowerShell na pasta do projeto.
   
   ```powershell
   cd "C:\caminho\para\o\projeto\gotenbergteste"
   ```

3. Inicie os serviços usando o **Docker Compose**:

   ```powershell
   docker-compose up -d
   ```

4. O Gotenberg estará disponível em `http://localhost:3000`.

5. Para rodar o teste de carga com **k6**, você pode baixar o k6 para Windows [aqui](https://k6.io/docs/getting-started/installation), e então rodar o comando:

   ```powershell
   k6 run load-test.js
   ```

6. Para parar os containers quando terminar, execute:

   ```powershell
   docker-compose down
   ```

## Personalização

- **Ajuste de desempenho**: Se você precisar ajustar o número de usuários no teste de carga, edite a configuração no arquivo `load-test.js`, na seção `options.stages`.
- **Novo arquivo HTML**: Caso queira testar com um arquivo HTML diferente, edite o conteúdo do arquivo `index.html`.

## Problemas Comuns

- **k6 não encontrado**: Se o **k6** não for encontrado após a instalação, verifique se ele foi instalado corretamente e está no PATH.
  
  Para instalar o **k6** no Linux, execute:

  ```bash
  sudo apt-get install k6
  # se não encontrar o k6 instale via snap
  snap install k6
  ```

  No Windows, siga o guia de instalação [aqui](https://k6.io/docs/getting-started/installation).

- **Erro ao acessar o Gotenberg**: Verifique se o Gotenberg está sendo executado corretamente em `localhost:3000`. Caso contrário, consulte os logs do Docker para diagnosticar o problema.

---

Se você tiver mais dúvidas ou sugestões de melhoria, fique à vontade para abrir uma **issue** ou contribuir com um **pull request**!

