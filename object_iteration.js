var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy () {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for(var i = 0; i < dairy.length; i++){
        console.log(dairy[i])
    }
}
logDairy()

 const animal = {

    canJump: true

    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

function birdCan() {

     for (prop of Object.keys(bird))
     console.log(prop + ": " + bird[prop])


}
birdCan()


const mamal = Object.create(bird)
    mamal.canFly = true
    mamal.hasFeathers = true
    mamal.canJump = true






function animalCan () {
    for ( prop of Object.keys(mamal))
    console.log(prop + ": " + mamal[prop])


}

animalCan()

