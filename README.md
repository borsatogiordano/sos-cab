# SOS Cab 🚗

> **Status:** Em desenvolvimento 🚧

Um sistema de controle financeiro para motoristas de aplicativos, desenvolvido com Next.js 15 e TypeScript.

## 📋 Sobre o Projeto

O **SOS Cab** é uma aplicação web que ajuda motoristas de aplicativos a organizarem suas finanças, acompanharem ganhos, gastos e performance das corridas de forma simples e intuitiva.

### 🎯 Funcionalidades Principais

- ✅ **Dashboard Financeiro** - Visão geral dos ganhos, gastos e lucro líquido
- ✅ **Controle de Corridas** - Registro e acompanhamento de corridas realizadas  
- ✅ **Gestão de Gastos** - Controle de despesas (combustível, manutenção, etc.)
- ✅ **Relatórios** - Análise de performance por período
- 🚧 **Metas e Objetivos** - Definição e acompanhamento de metas financeiras
- 🚧 **Exportação de Dados** - Relatórios em PDF/Excel

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** Radix UI + shadcn/ui
- **Ícones:** Tabler Icons
- **Tabelas:** TanStack Table
- **Drag & Drop:** dnd-kit
- **Formatação:** Prettier + ESLint

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd sos-cab

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Execute o projeto em modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
app/
├── favicon.ico
├── globals.css
├── layout.tsx
└── (portal)/                    # Grupo de rotas do painel
    ├── layout.tsx              # Layout do painel
    ├── page.tsx                # Dashboard principal
    ├── _components/            # Componentes compartilhados
    │   ├── columns.tsx         # Definição das colunas da tabela
    │   ├── data-table.tsx      # Componente da tabela de dados
    │   └── section-cards.tsx   # Cards do dashboard
    └── corridas/               # Seção de corridas
        ├── page.tsx
        └── _components/
            └── post-edit-ride/
                └── form.tsx    # Formulário de edição de corridas
```

## 🎨 Design System

O projeto utiliza um design system baseado em:

- **Cores:** Sistema de cores semânticas do Tailwind
- **Componentes:** shadcn/ui para consistência
- **Tipografia:** Inter (padrão do Tailwind)
- **Responsividade:** Mobile-first approach

## 📊 Funcionalidades Implementadas

### Dashboard
- [x] Cards de resumo financeiro (lucro, ganhos, gastos, corridas)
- [x] Indicadores de tendência com percentuais
- [x] Formatação monetária em Real (BRL)

### Tabela de Dados
- [x] Listagem de corridas e gastos
- [x] Ordenação e filtros
- [x] Seleção múltipla com checkboxes
- [x] Drag & drop para reordenação
- [x] Menu de ações (editar, duplicar, excluir)

### Tipos de Registro
- [x] **Corridas:** Partida, destino, valor, distância, forma de pagamento
- [x] **Gastos:** Descrição, categoria, valor, observações

## 🔄 Próximos Passos

- [ ] Integração com banco de dados
- [ ] Sistema de autenticação
- [ ] Formulários de cadastro/edição
- [ ] Filtros avançados por data
- [ ] Gráficos e relatórios visuais
- [ ] PWA (Progressive Web App)
- [ ] Sincronização offline

## 🤝 Contribuição

Este é um projeto pessoal em desenvolvimento. Sugestões e feedbacks são bem-vindos!

## 📄 Licença

[Definir licença]

---

**Desenvolvido com ❤️ para a comunidade de motoristas de aplicativo**