const GET = (req, res) => {
    try { 
       res.render('profile') 
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    GET
}