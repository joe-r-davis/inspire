function QuoteController() {

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
		var template = `
		<div class="jumbotron jumbotron-fluid centerFlex quote-box centered-text">
  			<div class="container">
    			<p style="font-size:16px"><em>&ldquo; ${quote.quote}&rdquo;</em></p>
    			<p style="font-size:16px">&mdash;${quote.author}</p>
  			</div>
		</div>

		
		`



		quoteElem.innerHTML = template
	})
}
