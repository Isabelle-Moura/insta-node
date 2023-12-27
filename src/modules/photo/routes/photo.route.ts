import express from "express";
import multer from "multer";
import { uploadProfilePic } from "../controllers/photo.controller";
import { checkAuthorization } from "../../../middlewares/validate-profile-photo.middleware";

export const photoRouter = express.Router();

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads/"); // Diretório onde os arquivos serão armazenados
   },
   filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg"); // Nome do arquivo
   },
});

const upload = multer({ storage: storage });

photoRouter.patch("/upload-profile-pic/:userId", checkAuthorization, upload.single("profilePic"), uploadProfilePic);
