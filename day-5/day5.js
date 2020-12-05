const calculateSeatId =(data) => {
    return data.map(ticket => {
        const rowId = ticket.substr(0, 7)
        const row = calculateRow(rowId)
        const colId = ticket.substr(7,9)
        const col = calculateColumn(colId)
        return (row*8) + col
    })
}

const calculateRow = (str) => {
    let low = 0
    let high = 127
    for (const lttr of str) {
        const half = (high-low + 1) /2
        if (lttr === "F") high -=half
        else low += half
    }
    return low
}

const calculateColumn = (str) => {
    let low = 0
    let high = 7
    for (const lttr of str) {
        const half = (high-low + 1) /2
        if (lttr === "L") high -=half
        else low += half
    }
    return low
}

const calculateTickets = (data) => {
    return data.map(ticket => {
        const rowId = ticket.substr(0, 7)
        const row = calculateRow(rowId)
        const colId = ticket.substr(7,9)
        const col = calculateColumn(colId)
        const id = (row*8) + col

        return {
            row,
            col,
            id
        }
    })
}

const findMySeat = (data) => {
    const tickets = calculateTickets(data)
    const rows = tickets.map(({row}) => row)
    const maxRow = Math.max(...rows)
    const minRow = Math.min(...rows)
    const noFrontOrBack = tickets.filter(({row}) => row!==minRow && row!==maxRow).sort(({id: id1}, {id:id2}) => id1-id2)

    let last = noFrontOrBack[0].id
    noFrontOrBack.splice(0,1)
    for(const {id} of noFrontOrBack) {
        if(id === last + 1) last += 1
        else return last + 1
    }
}

export {calculateSeatId, findMySeat}