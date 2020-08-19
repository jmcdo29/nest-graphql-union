import { createUnionType } from '@nestjs/graphql';
import { Bar } from './bar.model';
import { Foo } from './foo.model';

export const Baz = createUnionType({
  name: 'Baz',
  types: () => [Bar, Foo],
  resolveType: (value) => {
    if (value.value) {
      return Bar;
    }
    if (value.name) {
      return Foo;
    }
    return null;
  }
});
