import * as z from "zod";
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Image Prompt is required.",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  {
    value: 1,
    label: "1 Photo",
  },
  {
    value: 2,
    label: "2 Photos",
  },
  {
    value: 3,
    label: "3 Photos",
  },
  {
    value: 4,
    label: "4 Photos",
  },
  {
    value: 5,
    label: "5 Photos",
  },
];

export const imageResolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "320x240",
    label: "320x240",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "640x480",
    label: "640x480",
  },
  {
    value: "1280x720",
    label: "1280x720",
  },
];
