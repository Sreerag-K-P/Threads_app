import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3,{message:'Minimum 3 charecter'}),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3,{message:'Minimum 3 charecter'}),
});
