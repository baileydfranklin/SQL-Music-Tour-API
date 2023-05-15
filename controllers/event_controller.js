// DEPENDENCIES
const event = require('express').Router()
const db = require('../models')
const { Event } = db 
const { Op } = require('sequelize')

// GET
// FIND ALL EVENTS
Event.get('/', async (req, res) => {
    try {
        const foundEvent = await Event.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : '' }%` }
            }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})
// FIND A SPECIFIC BAND
Event.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})
// CREATE A BAND
Event.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// UPDATE A BAND
Event.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Band.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvent} event`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// DELETE A BAND
Event.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Band.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} event`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = event
