

// let health = 100

// let hits = 0

let target = {
    name: 'Batman',
    health: 100,
    hits: 0,
    items: []
}

let modTotals = 0


let tools = {
    crowbar: { name: 'Crowbar', modifier: 2, description: "OUCH!!" },
    acidFlower: { name: 'Acid Flower', modifier: 3, description: "YOU CAN'T SEE!" },
    switchblade: { name: 'switchblade', modifier: 5, description: "SIDEKICK ATTACK!!" },

}
function slap() {
    target.health -= 1 + modTotals
    target.hits++
    console.log('slap', target.health, target.hits)
    update()
}

function punch() {
    target.health -= 5 + modTotals
    target.hits++
    console.log('punch', target.health, target.hits);
    update()
}

function kick() {
    target.health -= 10 + modTotals
    target.hits++
    console.log('kick', target.health, target.hits);
    update()
}

// push items from items object into items array in target



function useCrowBar() {
    let tool = tools.crowbar
    target.items.push(tool)

    addMods()
}

function useAcidFlower() {
    let tool = tools.acidFlower
    target.items.push(tool)
    addMods()
}
function useSwitchblade() {
    let tool = tools.switchblade
    target.items.push(tool)
    addMods()
}

function addMods() {

    modTotals = 0
    let mod = target.items
    for (let i = 0; i < mod.length; i++) {
        modTotals += mod[i].modifier
        console.log(modTotals)

    }

}

function drawItems() {
    let template = ""
    let itemElem = document.getElementById("items")
    for (let key in target.items) {
        let item = target.items[key]
        template += ` 
        `
    }
    itemElem.innerHTML = template
}


function update() {
    document.getElementById("health").innerHTML = `${target.health}`
    document.getElementById("target").innerHTML = `${target.name}`
    document.getElementById("hits").innerHTML = `${target.hits}`
}

