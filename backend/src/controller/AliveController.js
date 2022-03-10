const alive = (req, res) => {
    // return res.status(200).send('API is Alive!')
    return res.status(200).send('You are connected to the botled Backend. Welcome!')
}

export default {
    alive
}
