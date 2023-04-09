import axios from 'axios';
const PAGE_SIZE = 10

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "bbe03c36-ca19-4dab-936a-c658a3176dba"
    }
})




export const restAPI = {
    async getPosts(error) {
        try {
            const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            return responce.data
        } catch(err) {
            error(true)
        } 
    },
    async getUsers(error, page) {
        try {
            const responce = await instance.get(`/users?count=${PAGE_SIZE}&page=${page}`)
            return responce.data
        } catch (err) {
            error(true)
        }
    },
    async getProfile(error, id) {
        try {
            const responce = await instance.get(`/profile/${id}`)
            return responce.data
        } catch (err) {
            error(true)
        }
    },
    async login(loader, email, password, rememberMe = false, captcha = null) {
        try {
            loader(true)
            const responce = await instance.post('/auth/login', {email, password, rememberMe, captcha})
            return responce.data
        } catch (err) {
            alert(err.message)
        } finally {
            loader(false)
        }
    },
    async logout() {
        try {
            const responce = await instance.delete('/auth/login')
            return responce.data
        } catch (err) {
            alert(err.message)
        } 
    },
    async follow(userId) {
        try {
            const responce = await instance.post(`/follow/${userId}`, {})
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async unFollow(userId) {
        try {
            const responce = await instance.delete(`/follow/${userId}`)
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async checkAuth(error) {
        try {
            const responce = await instance.get(`/auth/me/`)
            return responce.data
        } catch (err) {
            error(true)
        }
    },
    async getStatus(id) {
        try {
            const responce = await instance.get(`/profile/status/${id}`)
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async setStatus(value) {
        try {
            const responce = await instance.put(`/profile/status`, {status: value})
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async checkFollow(id) {
        try {
            const responce = await instance.get(`/follow/${id}`)
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async setProfilePhoto(photo) {
        try {
            const formData = new FormData()
            formData.append('image', photo)
            const responce = await instance.put(`/profile/photo/`, {image: photo}, {
                "headers": {
                    "Content-Type": "multipart/form-data"
                }
            })
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async setProfile(profile) {
        try {
            const responce = await instance.put(`/profile`, profile)
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
    async getSecurity() {
        try {
            const responce = await instance.put(`/security/get-captcha-url`)
            return responce.data
        } catch (err) {
            alert(err.message)
        }
    },
}