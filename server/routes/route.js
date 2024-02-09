import express from 'express';
import { saveSendEmails } from '../controller/email-controller';



const routes = express.Router();

routes.post('/save',saveSendEmails)

export default routes;
