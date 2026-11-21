import express, { type Request, type Response } from 'express';
import { config } from '../config.js';

export function resetHitCounter(req: Request, res: Response) {
    config.fileserverHits = 0;
    res.send('OK');
}