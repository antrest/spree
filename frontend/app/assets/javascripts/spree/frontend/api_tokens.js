Spree.fetchApiTokens = function () {
  fetch(Spree.routes.api_tokens, {
    method: 'GET',
    credentials: 'same-origin'
  }).then(function (response) {
    switch (response.status) {
      case 200:
        response.json().then(function (json) {
          SpreeAPI.orderToken = json.order_token
          SpreeAPI.oauthToken = json.oauth_token
          Spree.apiTokensFetched = true
        })
        break
    }
  })
}

Spree.ready(function () {
  if (!Spree.apiTokensFetched) Spree.fetchApiTokens()
})
