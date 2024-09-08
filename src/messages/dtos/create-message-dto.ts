// DTO => Data Transfer Object   Dto=> carries data between two places
// class-transformer: https://github.com/typestack/class-transformer
// class-validator: https://github.com/typestack/class-validator
// dacrators in class-validator as IsString:https://github.com/typestack/class-validator?tab=readme-ov-file#validation-decorators
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
