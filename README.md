<div align="center">

# 🚀 John Mota — Portfólio Full Stack

> Portfólio pessoal desenvolvido com Angular 21, apresentando projetos reais, design moderno com suporte a dark/light mode e deploy contêinerizado com Docker + Nginx.

[![Angular](https://img.shields.io/badge/Angular-21.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SCSS](https://img.shields.io/badge/SCSS-Design_System-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com)
[![Docker](https://img.shields.io/badge/Docker-Pronto-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)
[![Nginx](https://img.shields.io/badge/Nginx-Serve-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Stack Tecnológica](#️-stack-tecnológica)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Rodar](#-como-rodar)
  - [Pré-requisitos](#pré-requisitos)
  - [Rodando Localmente](#rodando-localmente)
  - [Rodando com Docker](#rodando-com-docker)
- [🐳 Detalhes do Docker](#-detalhes-do-docker)
- [📦 Build de Produção](#-build-de-produção)
- [📄 Licença](#-licença)

---

## 💡 Sobre o Projeto

Este portfólio foi construído do zero para apresentar minha trajetória como **Desenvolvedor Full Stack**, com ênfase em projetos reais para o setor público e privado. O design segue uma paleta **Deep Violet** com suporte completo a **dark e light mode**, animações suaves e layout responsivo para todos os dispositivos.

**Projetos em destaque:**
- 🎓 Matrícula Online — SEDUC/CE
- 👶 Cidade Mais Infância — Governo do Ceará
- 💈 Barber Star — SaaS de Gestão para Barbearias
- 🔧 Resolva Já — Ecossistema de Serviços Locais

---

## ✨ Funcionalidades

- **🌗 Dark / Light Mode** — Alternância de tema com persistência via `localStorage`
- **🖼️ Carrossel de Imagens** — Galeria de screenshots por projeto com navegação por botões e indicadores
- **🗂️ Modal de Detalhes** — Popup com descrição completa e como o desenvolvedor atuou em cada projeto
- **📱 Design Responsivo** — Totalmente adaptado para desktop, tablet e mobile
- **⚡ Performance** — Build otimizado com code splitting e cache de assets via Nginx
- **🧩 Componentização** — Arquitetura modular com Angular Standalone Components
- **🐳 Docker Ready** — Pronto para deploy com multi-stage build e Nginx

---

## 🛠️ Stack Tecnológica

| Categoria       | Tecnologia                                |
|-----------------|-------------------------------------------|
| Framework       | Angular 21 (Standalone Components)        |
| Linguagem       | TypeScript 5.9                            |
| Estilização     | SCSS com Design System customizado        |
| UI Components   | PrimeNG 21 + Primeicons                   |
| Servidor        | Nginx (em produção via Docker)            |
| Containerização | Docker + Docker Compose                   |
| Gerenciador     | npm 11                                    |

---

## 📁 Estrutura do Projeto

```
john-mota-portfolio/
├── public/
│   └── images/
│       └── projects/          # Screenshots dos projetos
│           ├── matricula-online/
│           ├── cidade-mais-infancia/
│           ├── barber/
│           └── resolva-ja/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes standalone (navbar, hero, projects...)
│   │   ├── data/              # Dados estáticos dos projetos
│   │   ├── models/            # Interfaces TypeScript (Project)
│   │   ├── services/          # ThemeService (dark/light mode)
│   │   └── shared/            # Componentes reutilizáveis
│   ├── _variables.scss        # Tokens de design (cores, tipografia, espaçamentos)
│   └── styles.scss            # Design System global
├── Dockerfile                 # Build multi-stage (Node → Nginx)
├── docker-compose.yml         # Configuração de serviço Docker
├── nginx.conf                 # Configuração do Nginx para SPA
└── .dockerignore              # Exclusões do contexto Docker
```

---

## 🚀 Como Rodar

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) `v20+`
- [npm](https://www.npmjs.com/) `v11+`
- *(Opcional para Docker)* [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)

---

### Rodando Localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/john-mota/john-mota-portfolio.git
cd john-mota-portfolio
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**
```bash
npm start
```

**4. Acesse no navegador:**
```
http://localhost:4200
```

> O servidor recarrega automaticamente ao salvar qualquer arquivo fonte.

---

### Rodando com Docker

> **Sem precisar instalar Node.js na máquina!** O Docker cuida de tudo.

**1. Clone o repositório:**
```bash
git clone https://github.com/john-mota/john-mota-portfolio.git
cd john-mota-portfolio
```

**2. Builde e suba o container:**
```bash
docker-compose up -d --build
```

**3. Acesse no navegador:**
```
http://localhost:8080
```

**4. Para parar o container:**
```bash
docker-compose down
```

---

## 🐳 Detalhes do Docker

O projeto utiliza uma estratégia de **multi-stage build** para gerar uma imagem final mínima e eficiente:

```
┌─────────────────────────────────────────────┐
│  Stage 1 — Build (node:20-alpine)           │
│  • npm install                              │
│  • ng build --configuration production      │
│  • Gera arquivos em dist/                   │
└──────────────────────┬──────────────────────┘
                       │  Copia apenas dist/
┌──────────────────────▼──────────────────────┐
│  Stage 2 — Serve (nginx:stable-alpine)      │
│  • Serve os arquivos estáticos              │
│  • Trata rotas Angular (try_files)          │
│  • Cache de 6 meses para assets estáticos  │
│  • Porta exposta: 80 → mapeada para 8080   │
└─────────────────────────────────────────────┘
```

**Benefícios:**
- ✅ Imagem final **leve** (sem Node.js desnecessário)
- ✅ **Rotas Angular** funcionando corretamente no Nginx
- ✅ **Cache automático** de CSS, JS, imagens e fontes
- ✅ Pronto para deploy em qualquer servidor com Docker

---

## 📦 Build de Produção

Para gerar o build otimizado sem Docker:

```bash
npm run build
```

Os arquivos serão gerados em:
```
dist/john-mota-portfolio/browser/
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para se inspirar, mas por favor, não copie o conteúdo pessoal (textos, dados e imagens são de autoria própria).

---

<div align="center">

Feito com 💜 por **John Mota** — [LinkedIn](https://linkedin.com/in/john-mota) · [GitHub](https://github.com/john-mota)

</div>
