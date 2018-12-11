const mongoose = require('mongoose')
const Types = mongoose.Schema.Types
const counterSchema = new mongoose.Schema({
    sequenceName: Types.String,
    sequenceValue: Types.Number
}, { collection: 'counters' })

const counterModel = mongoose.model('counters', counterSchema)

counterModel.getNextSeqValue = async (name) => {
    const sequence = await counterModel.findOneAndUpdate(
        { sequenceName: name },
        { $inc: { sequenceValue: 1 } }
    )
    return sequence.sequenceValue + 1
}

module.exports = counterModel
