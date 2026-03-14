import { Client, Account, ID} from 'appwrite'

const client = new Client()

client 
   .setEndpoint('https://fra.cloud.appwrite.io/v1')
   .setProject('69999b3f0035812ac21f')

export const account = new Account(client)   