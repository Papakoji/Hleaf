import Axios from 'axios'
const host = {
    heroku: "//hleaf-beta.herokuapp.com",
    localhost: "//localhost:5000"
}
export default Axios.create({
    baseURL: host.localhost
})