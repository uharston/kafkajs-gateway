import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CodeFirstService } from './code-first.service';
import { CodeFirst } from './entities/code-first.entity';
import { CreateCodeFirstInput } from './dto/create-code-first.input';
import { UpdateCodeFirstInput } from './dto/update-code-first.input';

@Resolver(() => CodeFirst)
export class CodeFirstResolver {
  constructor(private readonly codeFirstService: CodeFirstService) {}

  @Mutation(() => CodeFirst)
  createCodeFirst(@Args('createCodeFirstInput') createCodeFirstInput: CreateCodeFirstInput) {
    return this.codeFirstService.create(createCodeFirstInput);
  }

  @Query(() => [CodeFirst], { name: 'codeFirst' })
  findAll() {
    return this.codeFirstService.findAll();
  }

  @Query(() => CodeFirst, { name: 'codeFirst' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.codeFirstService.findOne(id);
  }

  @Mutation(() => CodeFirst)
  updateCodeFirst(@Args('updateCodeFirstInput') updateCodeFirstInput: UpdateCodeFirstInput) {
    return this.codeFirstService.update(updateCodeFirstInput.id, updateCodeFirstInput);
  }

  @Mutation(() => CodeFirst)
  removeCodeFirst(@Args('id', { type: () => Int }) id: number) {
    return this.codeFirstService.remove(id);
  }
}
