// src/controllers/ExampleController.ts
import pkg from 'express'
const { Request, Response } = pkg;
import KeonnService from '../KeonnService/service.js';

class KeonnController {
  async startKeonn(req, res){
    try {
      const data = await KeonnService.startKeonn();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default new KeonnController();
