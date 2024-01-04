import { ContentModel, Content } from "./content.model";

export const createContent = async (content: CreateContentDTO): Promise<Content> => {
   const newContent = new ContentModel(content);
   await newContent.save();
   return newContent;
};

export const updateContent = async (contentId: string, updatedContent: UpdateContentDTO): Promise<Content | null> => {
   const content = await ContentModel.findByIdAndUpdate(
      contentId,
      {
         ...updatedContent,
      },
      { new: true }
   );
   return content;
};

export const getContentById = async (contentId: string): Promise<Content | null> => {
   const content = await ContentModel.findById(contentId);
   return content;
};
