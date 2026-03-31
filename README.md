# 🎬 Master Filmes - Cadastro de Filmes

Sistema web para cadastro, gerenciamento e visualização de filmes. Desenvolvido com **Node.js**, **Express** e **SQLite3**.

## 📋 Características

- ✨ Interface intuitiva e responsiva
- 🎯 Cadastro de novos filmes com detalhes completos
- 📸 Upload de imagens/posters
- 🔍 Visualização de detalhes de filmes
- 🗑️ Exclusão de filmes
- 📱 Design moderno com Bootstrap 5
- 🎨 Tema dark mode integrado

## 🛠️ Stack Tecnológico

| Ferramenta     | Versão | Uso                       |
| -------------- | ------ | ------------------------- |
| **Node.js**    | 20+    | Runtime JavaScript        |
| **Express**    | 5.2.1  | Framework web             |
| **Sequelize**  | 6.37.8 | ORM para SQLite           |
| **SQLite3**    | 6.0.1  | Banco de dados            |
| **Handlebars** | 8.0.6  | Template engine           |
| **Bootstrap**  | 5.3.0  | Framework CSS             |
| **Multer**     | 2.1.1  | Upload de arquivos        |
| **Nodemon**    | 3.1.14 | Dev server com hot reload |

## 📦 Instalação

### Pré-requisitos

- Node.js 20+ instalado
- npm ou yarn

### Passos

1. **Clone ou navegue até o diretório do projeto**

```bash
cd Cadastro-de-filmes
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente** (se necessário)
   Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development
PORT=3000
```

4. **Inicie o servidor**

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 📂 Estrutura do Projeto

```
├── src/
│   ├── app.js                 # Configuração principal do Express
│   ├── config/
│   │   └── database.js        # Configuração do Sequelize e SQLite
│   ├── models/
│   │   └── FilmeModel.js      # Modelo de Filme
│   ├── routes/
│   │   └── moviesRoutes.js    # Rotas da aplicação
│   └── views/
│       ├── index.handlebars   # Página inicial (listagem)
│       ├── cadastro.handlebars # Formulário de cadastro
│       ├── detalhes.handlebars # Detalhes do filme
│       └── layouts/
│           └── main.handlebars # Template principal
├── public/
│   └── styles/
│       └── style.css          # Estilos customizados
├── server.js                  # Entrada da aplicação
└── package.json               # Dependências do projeto
```

## 🚀 Uso

### Listar Filmes

Acesse a página inicial para visualizar todos os filmes cadastrados:

```
GET /
```

### Cadastrar Filme

Navegue até a página de cadastro:

```
GET /cadastro
POST /cadastro
```

Preencha os detalhes do filme e envie o formulário.

### Visualizar Detalhes

Clique em um filme para visualizar seus detalhes completos:

```
GET /filme/:id
```

### Deletar Filme

Use a opção de exclusão na página de detalhes do filme:

```
DELETE /filme/:id
```

## 🗄️ Banco de Dados

A aplicação usa **SQLite3** com o ORM **Sequelize** para gerenciar dados.

### Modelo de Filme

```javascript
{
  id: Integer (Primary Key),
  titulo: String,
  genero: String,
  diretor: String,
  ano: Integer,
  sinopse: Text,
  posterUrl: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 📝 Variáveis de Ambiente

Crie um arquivo `.env` para customizar a configuração:

```env
# Servidor
NODE_ENV=development
PORT=3000

# Banco de Dados
DATABASE_PATH=./database.sqlite

# Multer (Upload)
UPLOAD_DIR=./public/uploads
MAX_FILE_SIZE=5242880
```

## 🎨 Personalização

### Alterar Tema

Edite [public/styles/style.css](public/styles/style.css) para customizar cores e estilos.

### Adicionar Novos Campos

1. Atualize o modelo em [src/models/FilmeModel.js](src/models/FilmeModel.js)
2. Crie uma nova migração (se usar migrations)
3. Atualize os formulários em [src/views/](src/views/)

## 📋 Scripts Disponíveis

```bash
# Iniciar servidor em modo desenvolvimento
npm run dev

# Iniciar servidor em produção
npm start

# (Futuro) Executar testes
npm test
```

## 🐛 Troubleshooting

### Porta já está em uso

```bash
# Mude a porta no .env ou execute:
PORT=3001 npm run dev
```

### Erro de conexão com banco de dados

- Verifique se o SQLite3 está instalado corretamente
- Confirme as permissões da pasta

### Upload de imagens não funciona

- Verifique se a pasta `public/uploads` existe
- Confirme as permissões de escrita

## 📄 Licença

ISC

## 👨‍💻 Autor

Desenvolvido como projeto acadêmico para a disciplina **Ferramentas de Frameworks - NodeJS e NestJS**

---

**Made with ❤️ using Express & Sequelize**
