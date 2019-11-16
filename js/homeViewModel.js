function HomeViewModel(){
	self = this;
	
	self.CardDecks = ko.computed(function(){
        var allContents = GetAllContents();
        var arr = [];
        
        ko.utils.arrayForEach(allContents, function(item){
            var cardDeck = new CardDeck(item);
            arr.push(cardDeck);
        });
        
        return arr;
    });
}