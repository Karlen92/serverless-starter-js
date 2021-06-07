(req, res) => {
    res.send(`Greetings from ${req.body.name || "Google Cloud Functions"}!`);
}
