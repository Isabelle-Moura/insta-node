import { Content, ContentModel } from "./content.model";
import { CreateContentDTO, UpdateContentDTO } from "./content.dto";
import { createContent, getContentById, updateContent } from "./content.repository";

export const createContentService = async (content: CreateContentDTO): Promise<Content> => {
   const newContent = await createContent(content);
   return newContent;
};

export const updateContentService = async (contentId: string, updatedContent: UpdateContentDTO): Promise<Content | null> => {
   const content = await updateContent(contentId, updatedContent);
   return content;
};

export const getContentService = async (contentId: string): Promise<Content | null> => {
   const content = await getContentById(contentId);
   return content;
};
