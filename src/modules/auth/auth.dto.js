import z from "zod";

export const signupDto = z.object({
  name: z.string().min(2).max(20).trim(),
  email: z.email(),
  password: z.string(),
  phone: z.string(),
  age: z.int().min(18).max(60).optional(),
});

export const signinDto = z.object({
  email: z.email(),
  password: z.string().min(2),
});
