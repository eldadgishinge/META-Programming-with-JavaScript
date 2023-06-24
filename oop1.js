cost = {
    shoes : 100 ,
    statetax : 1.2,

    totalprice : function() {
        var calculation = this.shoes * this.statetax
        console.log(calculation)

    }

}

cost.totalprice()
