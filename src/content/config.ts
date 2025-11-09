import { defineCollection, z } from "astro:content";

const actionButtonSchema = z.object({
  text: z.string(),
  url: z.string(),
  newTab: z.boolean().optional().default(false),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.coerce.date(),
      dreamedDate: z.coerce.date().optional(),
      writtenDate: z.coerce.date().optional(),
      revisionDate: z.coerce.date().optional(),
      image: image()
        .refine((img) => img.width >= 1200, {
          message: "Image should be 1200px x 630px.",
        })
        .optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
      sortOrder: z.number().optional(),
      draft: z.boolean().default(false),
      actionButtons: z.array(actionButtonSchema).optional(),
    }),
});

export const collections = { blog };
