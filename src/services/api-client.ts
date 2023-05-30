import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"6563026b84ef4a6094dfc276bcfeff0a"
    }
})