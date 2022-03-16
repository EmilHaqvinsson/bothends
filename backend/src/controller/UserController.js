import userDatabase from '../data/userDatabase.js'

function timestampToId(timestamp) {
    const toID = Math.floor((Math.random() * timestamp) / 1000)
    return Number(String(toID).substring(0,6))
}

const createMemo = (req, res) => {
    const { title, dueDate, text, assignedTo } = req.body
    console.log(req.body)
    const timestamp = new Date()
    const newObject = {
        id: (timestampToId(timestamp)),
        created: timestamp.toLocaleString('sv-SE'),
        title: title,
        dueDate: dueDate,
        isDone: false,
        text: text,
        assignedTo: assignedTo
    }
    userDatabase.push(newObject)
    res.status(201).send(userDatabase)
}

const getAll = (req, res) => {
    res.status(200).send(userDatabase)
}

const itemTitles = () => {
    const titles = []
    userDatabase.forEach(item => {
        titles.push({
            title: item.title
        })
    })
    return names
}

const getItemTitles = (req, res) => {
    const responseFromDb = itemTitles()
    res.status(200).send(responseFromDb)
}

function searchWithList(allWords) {
    return 'This function is still under construction.'
}

function searchForMemo(search) {
    console.log(search)
    let curr = {}
    let listOfHits = []
    let object = {}
    console.log('Checking titles..')
    for (let i = 0; i < userDatabase.length; i++) {
        curr = userDatabase[i]
        const nowTitle = curr.title.toLowerCase()
        console.log('Does the current title (' + String(nowTitle) + ') include our searchterm "' + search + '"..?', nowTitle.includes(String(search)))
        console.log('The word is ' + search + ', and the title is: ' + nowTitle)
        console.log('The index of ' + search + ', is ' + nowTitle.indexOf(search))
        if (nowTitle.includes(search)) {
            console.log('Item with title "' + curr.title + '" does contain the search!')
            listOfHits.push(curr)
            object = listOfHits
            console.log('listOfHits now: ', object.map((hit, index) => {
                console.log(hit.title, +'PLATS NUMMER' + index)
            }))
        } else {
            console.log('Found nothing. Continuing...')

        } (!listOfHits.length > 0) ? object = 'We couldnt find a matching entry for the query: "' + search + '". Please try again.' :
            object = listOfHits
    }
    return object

}
const getMemoFromSearch = (req, res) => {
    const search = req.params.inTitle.toLowerCase()
    const allWords = search.split(' ')
    const responseFromDb = searchForMemo(search)
    const response2FromDb = searchWithList(allWords)

    res.status(200).send(responseFromDb)
}

const modifyMemo = (id) => {
    let object = 'There is no item with ID "' + id + '".'
    console.log('the ID that we want to change is: ' + Number(id))
    for (let i = 0; i < userDatabase.length; i++) {
        if (id === userDatabase[i].id) {
            const object = userDatabase[i].title
            console.log('Found our object! It is..' + object)

            if (object.isDone !== false) {
                object.isDone = false
            } else {
                object.isDone = true;
            }
            console.log(object);
        }
    }
}

const updateMemo = (req, res) => {
    const id = Number(req.params.id)
    const isDone = req.body
    const response = modifyMemo(id)
    res.status(202).send(response)
}

const toggleDone = (req, res) => {
    const id = Number(req.params.id)
    const response = actualToggle(id)
    res.status(202).send(response)
}
function actualToggle(id) {
    let foundItem = {}
    for (let i = 0; i < userDatabase.length; i++) {
        if (id === userDatabase[i].id) {
            console.log('Finding item to update...')
            foundItem = userDatabase[i]
            if (foundItem.isDone.valueOf() === false) {
                foundItem.isDone = true
            } else {
                foundItem.isDone = false
            }
            console.log('Found our item! It has id ' + foundItem.id + ', and its "isDone"-value is now: ' + foundItem.isDone)
            return foundItem.isDone
        }
    }
}

const timeLeft = (req, res) => {
    const rightNow = req.params.rightNow
    const deadLine = req.params.dueDate
    const timeBetween = (deadLine - rightNow)
    console.log('rn: ' + rightNow + '\ndL: ' + deadLine)
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);
    console.log('time left:\n'+ `${days} days, `+`${hours} hours, `+`${minutes} minutes and ` + `${seconds} seconds`)
    res.status(200).send(
        `${days} days, `+`${hours} hours, `+`${minutes} minutes and ` + `${seconds} seconds`)
}

function calcTimeLeft(Current, Target) {
    var CalcTime = Current - Target; // Current - Initiallized

    var Years = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
    CalcTime -= Years * (1000 * 60 * 60 * 24 * 7 * 4 * 12);
    var Months = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7 / 4);
    CalcTime -= Months * (1000 * 60 * 60 * 24 * 7 * 4);
    var Weeks = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7);
    CalcTime -= Weeks * (1000 * 60 * 60 * 24 * 7);
    // The calculation seconds to days works properly & The calculation of weeks to years may be off slightly
    var Days = Math.floor(CalcTime / 1000 / 60 / 60 / 24);
    CalcTime -= Days * (1000 * 60 * 60 * 24);
    var Hours = Math.floor(CalcTime / 1000 / 60 / 60);
    CalcTime -= Hours * (1000 * 60 * 60);
    var Minutes = Math.floor(CalcTime / 1000 / 60);
    CalcTime -= Minutes * (1000 * 60);
    var Seconds = Math.floor(CalcTime / 1000 / 60);

    return (Years != 0 ? Years + ((Years == 1) ? 'year ' : 'years ') : '') + (Months != 0 ? Months + ((Months == 1) ? 'month ' : 'months ') : '') + (Weeks != 0 ? Weeks + ((Weeks == 1) ? 'week ' : 'weeks ') : '') + (Days != 0 ? Days + ((Days == 1) ? 'day ' : 'days ') : '') + (Hours != 0 ? ((Hours <= 9) ? '0' + Hours : Hours) + ((Hours == 1) ? 'hr ' : 'hrs ') : '') + (Minutes != 0 ? ((Minutes <= 9) ? '0' + Minutes : Minutes) + ((Minutes == 1) ? 'min ' : 'mins ') : '') + (Seconds != 0 ? ((Seconds <= 9) ? '0' + Seconds : Seconds) + ((Seconds == 1) ? 'sec ' : 'secs ') : '');
}

const deleteItemById = (id) => {
    let text = `The item with id: ${id} `

    for (let i = 0; i < userDatabase.length; i++) {
        if (Number(id) === userDatabase[i].id) {
            console.log('got here!')
            text += ` was deleted.`
            userDatabase.splice(i, 1)
            return text
        }
    }

    text += `.. is not in your database!`
    return text
}

function deleteItemByTitle(title) {
    console.log('Trying to find item with title that\'s matching "' + title + '"')
    for (let i = 0; i < userDatabase.length; i++) {
        const cur = userDatabase[i]
        if (cur.title === String(title)) {
            console.log(`Found item! It has id ${cur.id}, and title: ${cur.title}. Removing..`)
            const newDb = userDatabase.splice(i, 1)
            console.log(newDb)
            return userDatabase
        };
    }
    return console.log('Couldnt find an item with title "' + title + '"')
} 

const deleteItem = (req, res) => {
    const title = req.params.title
    const responseFromDB = deleteItemByTitle(title)
    res.status(200).send(responseFromDB)
}

export default {
    createMemo: createMemo,
    getAll: getAll,
    updateMemo: updateMemo,
    getMemoFromSearch: getMemoFromSearch,
    toggleDone: toggleDone,
    timeLeft: timeLeft,
    deleteItem: deleteItem,
}
