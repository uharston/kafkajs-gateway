import { Injectable } from '@nestjs/common';
import { CreateSchemaFirstInput } from './dto/create-schema-first.input';
import { UpdateSchemaFirstInput } from './dto/update-schema-first.input';

@Injectable()
export class SchemaFirstService {
  create(createSchemaFirstInput: CreateSchemaFirstInput) {
    return 'This action adds a new schemaFirst';
  }

  findAll() {
    return `This action returns all schemaFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schemaFirst`;
  }

  update(id: number, updateSchemaFirstInput: UpdateSchemaFirstInput) {
    return `This action updates a #${id} schemaFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} schemaFirst`;
  }
}
