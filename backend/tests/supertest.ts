import supertest from 'supertest'
import api from '../api/api'

const request = supertest(api)

export default request
