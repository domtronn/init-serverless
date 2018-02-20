import { handle } from './src/app'
export const handler = (event, context, callback) => handle(event, callback)
