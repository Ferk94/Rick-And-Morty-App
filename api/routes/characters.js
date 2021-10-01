const express = require("express")
const axios = require("axios")





const router = express.Router()



router.get("/all", (req, res) => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => response.data.results)
    .then(results => {
       return results.map(e => {
            return {
                id: e.id,
                name: e.name,
                image: e.image
            }
        })
    })
    .then(characters => res.json(characters))
    .catch(err => {
        console.log(err)
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        return {
            id: data.id,
            name: data.name,
            image: data.image,
            status: data.status,
            species: data.species,
            gender: data.gender,
            episodes: data.episode
        }
    })
    .then(character => res.json(character))
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;