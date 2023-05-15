// DEPENDENCIES
const stage = require('express').Router()
const db = require('../models')
const { Stage } = db 
const { Op } = require('sequelize')

// GET
// FIND ALL STAGE
stage.get('/', async (req, res) => {
    try {
        const foundStage = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : '' }%` }
            }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})
// FIND A SPECIFIC BAND
Stage.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})
// CREATE A BAND
Stage.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// UPDATE A BAND
Stage.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} stage`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// DELETE A BAND
Stage.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStage} Stage`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = Stage
