import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SchemaFirstService } from './schema-first.service';
import { CreateSchemaFirstInput } from './dto/create-schema-first.input';
import { UpdateSchemaFirstInput } from './dto/update-schema-first.input';

@Resolver('SchemaFirst')
export class SchemaFirstResolver {
  constructor(private readonly schemaFirstService: SchemaFirstService) {}

  @Mutation('createSchemaFirst')
  create(@Args('createSchemaFirstInput') createSchemaFirstInput: CreateSchemaFirstInput) {
    return this.schemaFirstService.create(createSchemaFirstInput);
  }

  @Query('schemaFirst')
  findAll() {
    return this.schemaFirstService.findAll();
  }

  @Query('schemaFirst')
  findOne(@Args('id') id: number) {
    return this.schemaFirstService.findOne(id);
  }

  @Mutation('updateSchemaFirst')
  update(@Args('updateSchemaFirstInput') updateSchemaFirstInput: UpdateSchemaFirstInput) {
    return this.schemaFirstService.update(updateSchemaFirstInput.id, updateSchemaFirstInput);
  }

  @Mutation('removeSchemaFirst')
  remove(@Args('id') id: number) {
    return this.schemaFirstService.remove(id);
  }
}
