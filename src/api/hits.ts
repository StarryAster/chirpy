import { type Request, type Response } from 'express';
import { config } from '../config.js';

export function hitCounter(req: Request, res: Response) {
    res.send(`Hits: ${config.fileserverHits}`);
}