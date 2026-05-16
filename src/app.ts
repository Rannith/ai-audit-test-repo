
import express from "express";
import authRouter, { requireAuth } from './auth';

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
	res.json({ message: "Hello from app.ts" });
});

app.get("/healthz", (_req, res) => {
	res.status(200).send("ok");
});

app.use('/auth', authRouter);

app.get('/protected', requireAuth, (req, res) => {
	res.json({ message: 'Protected resource', user: (req as any).user });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

if (require.main === module) {
	app.listen(port, () => {
		// eslint-disable-next-line no-console
		console.log(`Server listening on port ${port}`);
	});
}

export default app;
