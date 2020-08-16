# chatbot-api

Api feita com node.js para se conectar a api do github, para mostrar repositórios de um determinado usuário. 

### Orientações de uso

Para testar a api no https://blip.ai, faça o download do ngrok e suba ela no ngrok com o comando:

"./ngrok http 8000"

 e troque o link do conteúdo dinâmico/carrossel. 

Se atente em verificar se já não está usando a porta 8000, se estiver, troque.

É provável que você também precise trocar o token do github, ele expira em algumas horas. Vá no arquivo request.js:8.

Para gerar um novo token no github: Profile > Settings > Developer settings > Personal access tokens > Generate new token.