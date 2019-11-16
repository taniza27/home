function Card(data){
    self = this;
    
    if(data){
        ko.mapping.fromJS(data, {}, self)
    }
    else{
        self.title = ko.observable();
        self.description = ko.observable();
        self.image = ko.observable();
        slef.hashtags = ko.observable();
    }
}