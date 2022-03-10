import UserController from '../controller/UserController.js'

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/newMemo/', UserController.createMemo)

    // READ
    app.get('/getAll/', UserController.getAll) //Hämta alla items som finns i databasen
    // app.get('/items/title', UserController.getItemTitles) // Hämta alla titlar som finns i databasen
    app.get('/search/:inTitle', UserController.getMemoFromSearch)
    app.get('/timeLeft/:rightNow/:dueDate', UserController.timeLeft)

    // UPDATE
    app.put('/toggleDone/:id', UserController.toggleDone)
    //
    // // DELETE
    // app.delete('/user/:name', UserController.deleteUserByName)
}

export default {
    routes
}
