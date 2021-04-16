import { Injectable } from '@nestjs/common';
import { CreateCodeFirstInput } from './dto/create-code-first.input';
import { UpdateCodeFirstInput } from './dto/update-code-first.input';

@Injectable()
export class CodeFirstService {
  create(createCodeFirstInput: CreateCodeFirstInput) {
    return 'This action adds a new codeFirst';
  }

  findAll() {
    return `This action returns all codeFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codeFirst`;
  }

  update(id: number, updateCodeFirstInput: UpdateCodeFirstInput) {
    return `This action updates a #${id} codeFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} codeFirst`;
  }
}
