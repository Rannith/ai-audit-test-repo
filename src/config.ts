
export interface AppConfig {
	nodeEnv: 'development' | 'production' | 'test';
	port: number;
	database: {
		host: string;
		port: number;
		name: string;
		user?: string;
		password?: string;
	};
	auth: {
		adminUser: string;
		adminPassword: string;
		tokenExpirySeconds: number;
	};
	getDatabaseUrl(): string;
}

const env = process.env;

const config: AppConfig = {
	nodeEnv: (env.NODE_ENV as AppConfig['nodeEnv']) || 'development',
	port: Number(env.PORT) || 3000,
	database: {
		host: env.DB_HOST || 'localhost',
		port: Number(env.DB_PORT) || 5432,
		name: env.DB_NAME || 'app_db',
		user: env.DB_USER,
		password: env.DB_PASSWORD,
	},
	auth: {
		adminUser: env.AUTH_ADMIN_USER || 'admin',
		adminPassword: env.AUTH_ADMIN_PASSWORD || 'password',
		tokenExpirySeconds: Number(env.AUTH_TOKEN_EXPIRY_SECONDS) || 3600,
	},
	getDatabaseUrl() {
		const { user, password, host, port, name } = this.database;
		if (user && password) return `postgres://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${name}`;
		return `postgres://${host}:${port}/${name}`;
	},
};

export default config;
