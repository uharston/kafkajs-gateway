import { Test, TestingModule } from '@nestjs/testing';
import { SchemaFirstService } from './schema-first.service';

describe('SchemaFirstService', () => {
  let service: SchemaFirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchemaFirstService],
    }).compile();

    service = module.get<SchemaFirstService>(SchemaFirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
