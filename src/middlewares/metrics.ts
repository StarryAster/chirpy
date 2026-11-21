import express, { type Request, type Response } from 'express';
import { NextFunction } from "express";
import { config } from '../config.js';

export function middlewareMetricsInc(req: Request, res: Response, next: NextFunction) {
    config.fileserverHits += 1;
    next();
  }
