# UploaderNode
Sistema de upload usando Node e Express 

#Iniciar
Tenha o yarn instalado
Rode o comando yarn, para que todas as dependencias sejam instaladas...
Depois rode o comando yarn dev, para que o servidor seja startado.

#Enviar arquivos
Você pode usar o insomnia para fazer os testes...
Abra o Insomnia, clique em "New request" ou aperte CRTL-N..
Depois coloque o método "post" e na url coloque http://localhost:3000/posts...
Logo abaixo da url, clique em multipart, selecione "Multipart Form"...
No primeiro campo que aparecer digite file, no segundo selecione a opção 'file'...
Escolha o arquivo que quer enviar..... E clique em "send"....
Se você enviou os arquivos nos formatos suportados, você recebera a mensagem sucesso....
Aí é só abrir a pasta tmp/uploads que os arquivos estaram lá....
Para saber quais os formatos suportados ou alterar é só acessar config/multer ....

