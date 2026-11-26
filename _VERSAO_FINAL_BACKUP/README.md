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

---

### Estrutura de Páginas

| Página | Arquivo | Descrição |
| :--- | :--- | :--- |
| Início | `index.html` | Página principal contendo apresentação institucional, categorias, quadro de horários, uniforme e informações de contato. |
| Matrícula | `matricula.html` | Formulário de cadastro e pré-matrícula de atletas com validação client-side. |
| Confirmação | `obrigado.html` | Página de confirmação exibida após o envio válido do formulário de matrícula. |

---

### Arquitetura de Diretórios

```text
ATIVIDADE-AVALIATIVA/
├── index.html
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