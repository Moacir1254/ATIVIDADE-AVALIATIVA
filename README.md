# FutGestão

## Sistema de Gestão de Carreiras Esportivas de Base

### Tema do Projeto
Desenvolvimento de uma aplicação web institucional para a **FutGestão**, organização dedicada à formação técnica e à gestão de carreiras de jovens atletas de futebol, estruturando a trajetória esportiva desde as categorias de base até o nível profissional.

---

### Descrição
O projeto consiste no desenvolvimento do portal institucional da **FutGestão**, apresentando sua proposta metodológica, categorias de atendimento (Sub-7 ao Sub-17), grade de horários de treinamento, identidade visual, canais de atendimento e formulário funcional de pré-matrícula para novos atletas.

---

### Objetivo Geral
Construir uma aplicação web front-end responsiva e bem estruturada que apresente os serviços da FutGestão ao público-alvo (pais, responsáveis e atletas), facilitando o acesso às informações institucionais, horários de treino e processo de matrícula.

---

### Objetivos Específicos
- Implementar a identidade visual da marca (paleta institucional em verde `#157A34` e azul `#224056`, logotipo e uniforme oficial).
- Apresentar as categorias de formação (Sub-7 ao Sub-17) e o quadro de horários de treinamento em formato tabular.
- Disponibilizar um formulário de matrícula estruturado com validação de campos obrigatórios via JavaScript.
- Fornecer feedback de confirmação ao usuário após a submissão dos dados cadastrais.
- Disponibilizar os canais de contato (telefone, WhatsApp, e-mail e endereço) e o horário de atendimento.

---

### Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
| :--- | :--- |
| **HTML5** | Estrutura semântica de todas as páginas. |
| **CSS3** | Identidade visual própria, com variáveis de cor (`--verde` e `--azul`). |
| **Bootstrap 5.3** | Grid responsivo, menu de navegação (navbar), tabelas, formulário e botões. |
| **JavaScript** | Validação do formulário de matrícula e botão de limpar. |
| **Git e GitHub** | Versionamento e trabalho colaborativo em dupla. |

---

### Estrutura de Páginas

| Página | Arquivo | Descrição |
| :--- | :--- | :--- |
| Início | `index.html` | Página principal com banner de apresentação e acesso rápido à matrícula. |
| Sobre | `sobre.html` | Apresentação da FutGestão, missão, conquistas e uniforme oficial. |
| Categorias | `categorias.html` | Categorias de formação (Sub-7 ao Sub-17) e quadro de horários de treino. |
| Contato | `contato.html` | Telefone, e-mail, endereço, horário de atendimento e link para WhatsApp. |
| Matrícula | `matricula.html` | Formulário de pré-matrícula de atletas com validação client-side. |
| Confirmação | `obrigado.html` | Página de confirmação exibida após o envio válido do formulário. |

---

### Validação do Formulário

O arquivo `js/script.js` intercepta o envio do formulário de matrícula e:

1. Verifica se os campos obrigatórios (atleta, data de nascimento, categoria, posição, responsável, telefone e e-mail) estão preenchidos.
2. Verifica se a caixa de confirmação dos dados foi marcada.
3. Em caso de erro, cancela o envio e exibe uma mensagem de alerta.
4. Em caso de sucesso, redireciona o usuário para a página de confirmação.

O botão **Limpar** reinicia todos os campos e oculta a mensagem de erro.

---

### Arquitetura de Diretórios

```text
ATIVIDADE-AVALIATIVA/
├── index.html
├── sobre.html
├── categorias.html
├── contato.html
├── matricula.html
├── obrigado.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo.jpg
│   ├── logo-texto.jpg
│   ├── hero.jpg
│   └── uniforme.png
└── README.md
```

---

### Limitações e Melhorias Futuras
- Os dados do formulário não são armazenados, pois o projeto é apenas front-end. Uma versão futura exigiria back-end e banco de dados.
- Incluir validação de formato para telefone e data de nascimento, com máscara de digitação.
- Indicar visualmente os campos obrigatórios no formulário.
- Reaproveitar o cabeçalho e o rodapé entre as páginas, evitando código repetido.

---

### Autores
Projeto acadêmico desenvolvido por **José Victor Andrade Gomes** e **Moacir Mackeyve**.