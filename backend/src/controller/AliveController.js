const alive = (req, res) => {
    // return res.status(200).send('API is Alive!')
    return res.status(200).send(true)
}

export default {
    alive
}
