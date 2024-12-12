Este projeto utiliza Node.js para realizar o redimensionamento e a compressão de imagens de forma eficiente. Ele é ideal para aplicações que precisam otimizar imagens para uso na web, reduzindo o tamanho dos arquivos sem comprometer significativamente a qualidade visual.

Tecnologias Utilizadas

Node.js: Plataforma de execução para JavaScript no lado do servidor.

Sharp: Biblioteca para manipulação de imagens, como redimensionamento e compressão.

Express (opcional): Framework para criar uma API para gerenciar o processamento de imagens.

Funcionalidades

Redimensionar imagens para tamanhos personalizados.

Comprimir imagens para reduzir o tamanho do arquivo.

Suporte para diversos formatos de imagem (JPEG, PNG, WebP, etc.).

Processamento de imagens em lote.

Requisitos

Node.js (v14 ou superior)

npm (ou yarn)

Instalação

Clone este repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Navegue até o diretório do projeto:

cd RedimensionamentoComprimindoImagem

Instale as dependências:

npm install

Uso

Redimensionar e Comprimir Imagem

Coloque as imagens na pasta input (ou outra configurada no código).

Execute o script de processamento:

node app.js caminhoDaImagem larguraDaImagem

As imagens processadas serão salvas na pasta output.
