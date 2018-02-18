function QuoteController() {

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
		var template = `
		<div class="jumbotron jumbotron-fluid centerFlex quote-box centered-text">
  			<div class="container">
    			<h1 class="display-4"><em>&ldquo; ${quote.quote}&rdquo;</em></h1>
    			<p class="lead">&mdash;${quote.author}</p>
  			</div>
		</div>

		
		`



		quoteElem.innerHTML = template
	})
}
