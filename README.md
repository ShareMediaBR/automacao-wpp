# Automação WhatsApp com wwebjs

Este projeto é uma automação para WhatsApp utilizando a biblioteca `wwebjs`. O objetivo é enviar mensagens de forma automatizada para uma lista de contatos, utilizando um arquivo Excel para importar os números de telefone.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)

## Instalação

Clone o repositório com o comando:

bash

git clone https://github.com/ShareMediaBR/automacao-wpp.git
cd automacao-wpp
Instale as dependências:

bash
Copy code
npm install
Configure o Git Large File Storage (LFS) se necessário. Se houver arquivos grandes no repositório, certifique-se de que o Git LFS está configurado corretamente:

bash
Copy code
git lfs install
git lfs track "*.exe"
git lfs track "*.dll"
Adicione e comite as mudanças:

bash
Copy code
git add .gitattributes
git commit -m "Configure Git LFS"
Uso
Prepare um arquivo Excel com a lista de números de telefone. O arquivo deve estar no formato .xlsx e conter uma coluna com os números de telefone e outra com as mensagens a serem enviadas.

Abra o arquivo config.json e configure as opções de acordo com suas necessidades.

Execute o script de automação com:

bash
Copy code
node index.js
Certifique-se de que o WhatsApp Web esteja aberto e que o QR Code tenha sido escaneado para autenticação.

Estrutura do Projeto
index.js: Arquivo principal do projeto, que contém a lógica para enviar mensagens.
config.json: Arquivo de configuração com opções do projeto.
data/: Pasta para arquivos de dados, como o arquivo Excel com os contatos.
Contribuição
Contribuições são bem-vindas! Se você quiser ajudar a melhorar o projeto, siga estes passos:

Fork o repositório.
Crie uma branch para sua feature ou correção.
Faça as alterações e adicione commits.
Envie um Pull Request para o repositório original.
Licença
Este projeto está licenciado sob a MIT License.
