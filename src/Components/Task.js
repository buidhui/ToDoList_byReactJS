const uuidv4 = require('uuid/v4');
export default {
    items: [
        {
            id: uuidv4(),
            name: 'The father of accounting was Luca Pacioli.',
            level: 0, // 0 low, 1 medium, 2 high
        },
        {
            id: uuidv4(),
            name: 'Many accounting terms have Latin roots.',
            level: 1, // 0 low, 1 medium, 2 high
        },
        {
            id: uuidv4(),
            name: 'The Romans were obsessed with accounting.',
            level: 2, // 0 low, 1 medium, 2 high
        },
        {
            id: uuidv4(),
            name: 'Bubblegum was invented by an accountant.',
            level: 1, // 0 low, 1 medium, 2 high
        }
    ]
}