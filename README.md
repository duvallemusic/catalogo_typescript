# Catalogo de Livros (React + TypeScript)

Aplicacao web para cadastrar, listar, remover e atualizar o status de livros consumindo uma API real do [CrudCrud](https://crudcrud.com/).

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Axios
- ESLint
- CSS

## Funcionalidades

- Listagem de livros salvos na API (GET)
- Cadastro de novo livro (POST)
- Remocao de livro (DELETE)
- Atualizacao de status entre `Lido` e `Nao lido` (PUT)

## Estrutura principal

- `src/components/BookForm.tsx`: formulario de cadastro
- `src/components/BookList.tsx`: lista de livros
- `src/components/BookItem.tsx`: item individual com acoes
- `src/services/api.ts`: chamadas HTTP para o CrudCrud
- `src/types/book.ts`: tipagem dos dados e contratos

## Como configurar e rodar

### 1) Instalar dependencias

```bash
npm install
```

### 2) Configurar URL da API

Crie/edite o arquivo `.env` na raiz do projeto com:

```env
VITE_API_URL=https://crudcrud.com/api/SEU_ENDPOINT/livros
```

Use o endpoint gerado na sua conta do CrudCrud.

> Ja existe um arquivo `.env.example` como referencia.

### 3) Executar em desenvolvimento

```bash
npm run dev
```

Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

### 4) Gerar build de producao

```bash
npm run build
```

### 5) Visualizar build localmente

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: sobe servidor de desenvolvimento
- `npm run build`: compila TypeScript e gera build
- `npm run preview`: serve o build localmente
- `npm run lint`: roda verificacao de lint

## Observacoes

- O endpoint do CrudCrud expira com o tempo. Quando expirar, gere outro e atualize o `.env`.
- Sempre que alterar o `.env`, reinicie o `npm run dev`.
