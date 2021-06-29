# Upfi 2.0
Aplicação de galeria públic com opção de curtir fotos.

## Overview
Originalmente, a aplicação Upfi permitia o upload de fotos anônimas. Resolvi adicionar algumas features a mais como criação de perfil e curtidas.

## Link do app em produção
https://upfi.vercel.app/

## Como rodar localmente
### Dependências
- Docker;
- Docker-compose;
- Node;

### Passos Backend
- Clonar o backend com `git clone https://github.com/luisfilipefa/upfi-backend.git`;
- Instalar dependências com `yarn`;
- Subir o container do banco de dados com `docker-compose up -d`
- Iniciar o backend com `yarn dev`;

### Passos Frontend
- Clonar este repositório com `git clone https://github.com/luisfilipefa/upfi-frontend.git`;
- Instalar dependências com `yarn`;
- Iniciar frontend com `yarn dev`;

Pronto! Agora é só acessar http://localhost:3000 no seu browser e testar o app!
