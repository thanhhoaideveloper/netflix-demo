const useRoute = require('./userRoute');

const Router = (app) => {
    app.use('/api/v1/user', useRoute)
}

module.exports = Router;