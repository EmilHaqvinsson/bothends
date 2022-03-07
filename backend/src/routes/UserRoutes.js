import UserController from '../controller/UserController.js'

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/newMemo/', UserController.createMemo)

    // READ
    app.get('/getAll/', UserController.getAll) //Hämta alla items som finns i databasen
    // app.get('/items/title', UserController.getItemTitles) // Hämta alla titlar som finns i databasen
    app.get('/search/:inTitle', UserController.getMemoFromSearch)

    // UPDATE
    app.put('/edit/:id', UserController.updateMemo)
    //
    // // DELETE
    // app.delete('/user/:name', UserController.deleteUserByName)
}

export default {
    routes
}
