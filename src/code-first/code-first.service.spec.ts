import { Test, TestingModule } from '@nestjs/testing';
import { CodeFirstService } from './code-first.service';

describe('CodeFirstService', () => {
  let service: CodeFirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeFirstService],
    }).compile();

    service = module.get<CodeFirstService>(CodeFirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
