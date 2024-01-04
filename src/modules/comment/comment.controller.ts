import { Request, Response } from "express";
import { createContentService, getContentService, updateContentService } from "./content.service";
import { CreateContentDTO, UpdateContentDTO } from "./content.dto";

export const createContentController = async (req: Request, res: Response) => {
   try {
      const contentDTO: CreateContentDTO = req.body;
      const newContent = await createContentService(contentDTO);
      res.status(201).json(newContent);
   } catch (error) {
      res.status(500).json({ message: "Error creating content" });
   }
};

export const updateContentController = async (req: Request, res: Response) => {
   try {
      const contentId = req.params.contentId;
      const updatedContentDTO: UpdateContentDTO = req.body;
      const updatedContent = await updateContentService(contentId, updatedContentDTO);
      res.status(200).json(updatedContent);
   } catch (error) {
      res.status(500).json({ message: "Error updating content" });
   }
};

export const getContentController = async (req: Request, res: Response) => {
   try {
      const contentId = req.params.contentId;
      const content = await getContentService(contentId);
      if (!content) {
         res.status(404).json({ message: "Content not found" });
      } else {
         res.status(200).json(content);
      }
   } catch (error) {
      res.status(500).json({ message: "Error fetching content" });
   }
};
