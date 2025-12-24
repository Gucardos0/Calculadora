#  Calculadora JavaScript – Projeto Aprimorado

Este projeto é uma **calculadora desenvolvida em HTML, CSS e JavaScript**, baseada em um projeto apresentado no curso **CFB Cursos**.  
O projeto original foi **modificado, refatorado e aprimorado** por mim, com foco em **lógica de programação, validações e boas práticas em JavaScript**.

---

##  Objetivo do Projeto

- Praticar manipulação do DOM
- Trabalhar com eventos em JavaScript
- Implementar controle de estado
- Evitar entradas inválidas em uma calculadora
- Aprimorar um projeto de curso com lógica própria

---

##  Funcionalidades

✔ Operações básicas  
- Soma (`+`)
- Subtração (`-`)
- Multiplicação (`x`)
- Divisão (`/`)

✔ Recursos adicionais  
- Suporte a números decimais (vírgula)
- Uso de parênteses `(` `)`
- Copiar o valor do display para a área de transferência
- Limpar a calculadora

---

##  Regras de Validação Implementadas

###  Controle de vírgula (decimal)
- Não permite duas vírgulas no mesmo número  
  ❌ `2,,3`  
  ✅ `2,3`
- Permite decimais após operadores  
  ✅ `2,5 + 1,2`

###  Controle de operadores
- Não permite operadores em sequência  
  ❌ `5++`  
  ❌ `5+-`  
  ✅ `5+6`
- Converte automaticamente `x` em `*` para o cálculo

###  Zero inicial
- Evita números inválidos como `05`
- Permite valores como `0,5`

---

## 🧩 Conceitos Utilizados

- Manipulação do DOM
- Event Listeners
- Funções
- Variáveis booleanas (`decimal`, `sinal`)
- Máquina de estados simples
- Validação de entrada
- Guard Clauses (`if (condição) return`)

---

##  Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

##  Estrutura do Projeto
📁 calculadora
├── index.html
├── style.css
├── script.js
└── README.md



---

##  Melhorias em relação ao projeto original

- Refatoração do código JavaScript
- Criação de funções reutilizáveis
- Implementação de validações de entrada
- Melhor controle de estados
- Código mais organizado e legível
- Comportamento mais próximo de uma calculadora real

---

##  Créditos

Projeto base desenvolvido no curso **CFB Cursos**  
Projeto modificado e aprimorado por **[Gustavo Cardoso]**

---

##  Próximas melhorias

- Remover o uso de `eval`
- Adicionar histórico de cálculos
- Suporte ao teclado físico
- Melhorar responsividade e layout


