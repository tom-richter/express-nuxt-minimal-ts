import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.baseURL + '/api'
})

interface Post {
  id: string
  title: string
}

export default {
  async getPosts() {
    const { data }: { data: Post[] } = await apiClient.get('/posts')
    return data
  }
}
