# Chatbot-api

Api feita com node.js para se conectar a api do github, para mostrar repositórios de um determinado usuário. 

### Orientações de uso

Para testar a api no https://blip.ai, faça o download do ngrok e suba ela no ngrok com o comando:
`
"./ngrok http 8001"
`

 e troque o link do conteúdo dinâmico/carrossel. 

Se atente em verificar se já não está usando a porta 8001, se estiver, troque no arquivo "default.json".

Você também precisa trocar o token do github. Vá no arquivo "request.js:8".

Para gerar um novo token no github: Profile > Settings > Developer settings > Personal access tokens > Generate new token.
