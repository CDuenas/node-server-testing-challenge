const express = require("express")
const Heroes = require("./heroes-model")

const router = express.Router()

router.post("/", async (req, res, next) => {
	try{
		const hero = await Heroes.create(req.body)
		res.status(201).json(hero)
	} catch(err) {
		next(err)
	}
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Heroes.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(204).json({ removed: deleted });
        } else {
            res.status(404).json({ message: 'Could not find hero with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete hero' });
    });
});

module.exports = router