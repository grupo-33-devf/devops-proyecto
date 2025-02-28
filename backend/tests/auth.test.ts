/**
 * firstName
lastName
birthday
phone
address
email
password
 */

import request from './supertest'

import { clearDB, connectDB, disconnectDB } from './database'
import { ERROR_CODES } from '../api/errors/CustomError'

beforeAll(async () => {
  await connectDB()
})
// beforeEach(() => {})

afterAll(async () => {
  await disconnectDB()
})
afterEach(async () => {
  await clearDB()
})

describe('/auth/register', () => {
  test('Successfull user register', async () => {
    const response = await request.post('/auth/register').send({
      user: {
        firstName: 'FirstName Test',
        lastName: 'LastName Test',
        birthday: '1999-10-10',
        phone: '5566778899',
        address: 'Test address 200',
        email: 'test@test.com',
        password: '123123',
      },
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.code).toBe('NEW_USER')
  })

  test('Duplicated user register', async () => {
    const response = await request.post('/auth/register').send({
      user: {
        firstName: 'FirstName Test',
        lastName: 'LastName Test',
        birthday: '1999-10-10',
        phone: '5566778899',
        address: 'Test address 200',
        email: 'test@test.com',
        password: '123123',
      },
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.code).toBe('NEW_USER')

    const response2 = await request.post('/auth/register').send({
      user: {
        firstName: 'FirstName Test',
        lastName: 'LastName Test',
        birthday: '1999-10-10',
        phone: '5566778899',
        address: 'Test address 200',
        email: 'test@test.com',
        password: '123123',
      },
    })

    expect(response2.statusCode).toBe(409)
    expect(response2.body.code).toBe(ERROR_CODES.DUPLICATED_USER)
  })

  test('Missing body user register', async () => {
    const response = await request.post('/auth/register').send({
      user: {
        firstName: 'FirstName Test',
        lastName: 'LastName Test',
        birthday: '1999-10-10',
        phone: '5566778899',
        address: 'Test address 200',
      },
    })

    expect(response.statusCode).toBe(400)
  })
})
