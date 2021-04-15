import { CreateSchemaFirstInput } from './create-schema-first.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSchemaFirstInput extends PartialType(CreateSchemaFirstInput) {
  id: number;
}
