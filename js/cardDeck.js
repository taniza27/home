function CardDeck(data){
    self = this;
    
    if(data){
        var mappingChildren = {
            cards: {
                create: function(data) {
                    return new Card(data.data)
                }
            }
        };
        
        ko.mapping.fromJS(data, mappingChildren, self);
    }
    else{
        self.cards = ko.ovservableArray([]);
    }
}