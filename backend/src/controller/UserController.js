import userDatabase from '../data/userDatabase.js'

const createMemo = (req, res) => {
    const {title, dueDate, isDone, text, assignedTo} = req.body
    const timestamp = new Date()
    const newObject = {
        id: (userDatabase.items.length),
        created: timestamp.toLocaleString(),
        title: title,
        dueDate: dueDate,
        isDone: isDone,
        text: text,
        assignedTo: assignedTo
    }
    userDatabase.items.push(newObject)
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
    const responseFromDb = userNames()
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
    for (let i = 0; i < userDatabase.items.length; i++) {
        curr = userDatabase.items[i]
        const nowTitle = curr.title.toLowerCase()
        console.log('Does the current title ('+String(nowTitle)+') include our searchterm "'+search+'"..?', nowTitle.includes(String(search)))
        console.log('The word is '+ search +', and the title is: '+ nowTitle)
        console.log('The index of '+ search +', is '+ nowTitle.indexOf(search))
        if (nowTitle.includes(search)) {
            console.log('Item with title "'+curr.title+'" does contain the search!')
            listOfHits.push(curr)
            object = listOfHits
            console.log('listOfHits now: ', object.map((hit, index)=> {
                console.log(hit.title,+'PLATS NUMMER'+index)
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
    console.log('the ID that we want to change is: '+Number(id))
        for (let i = 0; i < userDatabase.items.length; i++) {
            if (id === userDatabase.items[i].id) {
                console.log('Found our object! It is..')
                object = userDatabase.items[i]

                if (object.isDone !== false) {
                    object.isDone = false
                } else {
                    object.isDone = true;
                }
                console.log(object);
            // } else {
            //     // return object
            // }
        }
    }}

    const updateMemo = (req, res) => {
        const id = Number(req.params.id)
        const isDone = req.body
        const response = modifyMemo(id)
        res.status(202).send(response)
    }

    const removeUserByName = (name) => {
        let text = `User with name: "${name}" `

        for (let i = 0; i < userDatabase.length; i++) {
            if (name === userDatabase[i].name) {
                text += `was deleted from database!`
                userDatabase.splice(i, 1)
                return text
            }
        }

        text += `don't exist in database!`
        return text
    }

    const deleteUserByName = (req, res) => {
        const name = req.params.name
        const responseFromDB = removeUserByName(name)
        res.status(200).send(responseFromDB)
    }

    export default {
        createMemo: createMemo,
        getAll: getAll,
        updateMemo: updateMemo,
        getMemoFromSearch: getMemoFromSearch,
    }
