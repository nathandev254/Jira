import { Request, Response, NextFunction } from "express";
import { z, ZodType } from "zod";gfdsadfnm,

export const validateRequest = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Validate request body against schema
      const validatedData = schema.parse(req.body);
      
      // Replace req.body with validated data
      req.body = validatedData;
      
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format Zod validation errors
        const formattedErrors = error.issues.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        }));

        res.status(400).json({
          message: "Validation failed",
          errors: formattedErrors,
        });
        return;
      }
      
      // Handle other errors
      res.status(500).json({
        message: "Internal server error during validation",
      });
      return;
    }
  };
};
