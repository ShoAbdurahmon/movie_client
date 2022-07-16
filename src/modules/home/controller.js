const GET = (req, res) => {
    try { 
       res.render('home') 
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    GET
}