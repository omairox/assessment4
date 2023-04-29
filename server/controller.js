const toDoList = [
    { 
        id: 1,
        item: "clean my snail's room"
    },
    {
        id: 2,
        item: 'walk my snail'
    },
    {
        id: 3,
        item: "brush my snail's teeth"
    }
]

let globalId = 4;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ['u will make tom brady come out of retirement','u will find a cat and name him mr. cat','u will have a job at perficient in 3 months'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    showList: (req,res) => {
        res.status(200).send(toDoList);
    },

    postItem: (req,res) => {
        const {item} = req.body
        const something = {
            id: globalId,
            item
        }
        toDoList.push(something);
        res.status(200).send(toDoList);
        

        globalId++;
    },

    deleteItem: (req,res) => {
        const {id} = req.params
        const itemIndex = toDoList.findIndex(item => item.id === +id)
        toDoList.splice(itemIndex,1)
        res.status(200).send(toDoList)
    }
}