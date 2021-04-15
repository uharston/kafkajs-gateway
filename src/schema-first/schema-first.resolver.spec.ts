import { Test, TestingModule } from '@nestjs/testing';
import { SchemaFirstResolver } from './schema-first.resolver';
import { SchemaFirstService } from './schema-first.service';

describe('SchemaFirstResolver', () => {
  let resolver: SchemaFirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchemaFirstResolver, SchemaFirstService],
    }).compile();

    resolver = module.get<SchemaFirstResolver>(SchemaFirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
