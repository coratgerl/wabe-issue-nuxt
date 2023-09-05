import { Elysia } from 'elysia'
import { Schema } from '../schema'
import { DatabaseConfig } from '../database'

interface WibeConfig {
	port: number
	schema: Schema[]
	database: DatabaseConfig
}

export class WibeApp {
	private config: WibeConfig
	private server: Elysia

	constructor(config: WibeConfig) {
		this.config = config

		this.server = new Elysia()

		this.server.listen(this.config.port)
	}
}
