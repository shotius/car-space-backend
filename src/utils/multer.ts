import multer from 'multer';
import path from 'path';
import { randomString } from './functions/randomString';

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function (_req, file, cb) {
    cb(null, `${randomString(24)}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
});
