- Mobile-First"

Adicionar uma rota padrão: Adicionar uma rota padrão (path="*") é uma boa prática para lidar com URLs desconhecidas. Isso garante que o usuário não veja uma página em branco ou um erro quando acessa uma URL que não corresponde a nenhuma das rotas definidas 9.
<Route path="*">
   <NotFound />
</Route>