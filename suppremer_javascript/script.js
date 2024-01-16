class Voiture{
    constructor(Immatriculation,Marque,Couleur,Carburant,Prix_Jour){
        this.Immatriculation = Immatriculation
        this.Marque = Marque
        this.Couleur = Couleur
        this.Carburant = Carburant
        this.Prix_Jour = Prix_Jour
    }
}

v1 = new Voiture('48-A-20000','Clio 3','Noir','Diesel',250) 
v2 = new Voiture('48-A-20001','Clio 4','Rouge','Diesel',300) 
v3 = new Voiture('48-A-20002','Dacia','Noir','Essence',200) 

T_Voitures = [v1,v2,v3]

function getAllVoitures(){
    items = document.getElementById('items')
    for (el of T_Voitures){
        var tr = document.createElement('tr')
        for (key in el){
            var td = document.createElement('td')
            td.textContent = el[key]
            tr.append(td)
        }
        var btn = document.createElement('button')
        btn.textContent = 'Supprimer'
        btn.onclick = deleteVoiture
        var td = document.createElement('td')
        td.append(btn)
        tr.append(td)
        items.append(tr)
    }
}

function deleteVoiture(){
    this.parentElement.parentElement.remove(this.parentElement)
    vAsupprimer = this.parentElement
    trs = document.getElementsByTagName('tr')
    for(let el of trs){
        if (el ==vAsupprimer){
            
        }
    }
    if (vAsupprimer == v) {
        
    }
}
getAllVoitures()